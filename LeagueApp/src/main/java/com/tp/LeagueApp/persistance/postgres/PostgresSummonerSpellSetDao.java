package com.tp.LeagueApp.persistance.postgres;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.SummonerSpellSet;
import com.tp.LeagueApp.persistance.interfaces.SummonerSpellSetDao;
import com.tp.LeagueApp.persistance.postgres.mappers.IntegerMapper;
import com.tp.LeagueApp.persistance.postgres.mappers.SummonerSpellSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;

@Component
@Profile({"production","daoTesting"})
public class PostgresSummonerSpellSetDao implements SummonerSpellSetDao {
    @Autowired
    JdbcTemplate template;

    //CREATE
    @Override
    public SummonerSpellSet createNewSummonerSpellSet(SummonerSpellSet toAdd) throws NullSetException, EmptySummonerSpellListException,
            InvalidSummonerSpellException, DuplicateComponentException, MaxNameLengthException, EmptyStringException {

        if(toAdd == null)
            throw new NullSetException("ERROR: Tried to create a null summoner spell set.");
        if(toAdd.getSummonerSpellIdList().size() == 0)
            throw new EmptySummonerSpellListException("ERROR: Empty item list.");
        if(checkDuplicateList(toAdd.getSummonerSpellIdList()) == false)
            throw new DuplicateComponentException("ERROR: Duplicate id's in item list.");
        if(!checkEmptyString(toAdd.getSummonerSpellSetName()))
            throw new EmptyStringException("ERROR: Tried to make a summoner spell set with empty name.");
        if(toAdd.getSummonerSpellSetName().length() > 50)
            throw new MaxNameLengthException("ERROR: Summoner Spell Set name is too long (50 characters max).");


        //Add validate items
        if(!validateSummonerSpellList(toAdd.getSummonerSpellIdList()))
            throw new InvalidSummonerSpellException("Summoner spell in list is not valid.");

        Integer summSpellSetId = template.queryForObject("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (?, ?) RETURNING \"summSpellSetId\";",
                new IntegerMapper("summSpellSetId"),
                toAdd.getSummonerSpellSetName(),
                toAdd.getChampionId()
        );

        //Add insert into bridge
        for(Integer summSpellIdToAdd : toAdd.getSummonerSpellIdList()) {
            template.update("insert into \"SummonerSpellSetSummonerSpells\" (\"summSpellSetId\", \"summSpellId\") values ('"+summSpellSetId+"', '"+summSpellIdToAdd+"')");
        }

        toAdd.setSummonerSpellSetId(summSpellSetId);

        return toAdd;
    }

    private boolean checkDuplicateList(List<Integer> toCheck) {
        java.util.HashSet unique = new HashSet();
        for (Integer id : toCheck){
            if(!unique.add(id)){
                return false;
            }
        }
        return true;
    }

    private boolean validateSummonerSpellList(List<Integer> toCheck) {
        boolean equal = true;

        Integer queryCount = 0;

        for(Integer toValidate : toCheck) {
            queryCount += template.queryForObject("select COUNT(*) from \"SummonerSpells\" where \"summSpellId\" in (?)",
                    new IntegerMapper("count"), toValidate);
        }

        Integer toCheckCount = toCheck.size();

        if(!queryCount.equals(toCheckCount))
            equal = false;

        return equal;
    }

    //READ
    @Override
    public List<SummonerSpellSet> getAllSummonerSpellSets() {
        List<SummonerSpellSet> allSummonerSpellSets = template.query("select * from \"SummonerSpellSets\"",
                new SummonerSpellSetMapper());

        for(SummonerSpellSet toGet : allSummonerSpellSets) {
            List<Integer> summSpellIds = template.query("select isi.\"summSpellId\"\n" +
                    "from \"SummonerSpellSetSummonerSpells\" as isi\n" +
                    "where isi.\"summSpellSetId\" = ?;", new IntegerMapper("summSpellId"), toGet.getSummonerSpellSetId());

            toGet.setSummonerSpellIdList(summSpellIds);
        }

        return allSummonerSpellSets;
    }

    @Override
    public SummonerSpellSet getSummonerSpellSetById(Integer summonerSpellSetId) throws NullIdException, InvalidSetException {

        if(summonerSpellSetId == null)
            throw new NullIdException("ERROR: Tried to get a summoner spell set with a null name.");
        if(!validateSummonerSpellSetId(summonerSpellSetId))
            throw new InvalidSetException("ERROR: Tried to get a summoner spell set that doesn't exist.");

        List<SummonerSpellSet> toReturn = template.query("select * from \"SummonerSpellSets\" where \"summSpellSetId\" = ?;",
                new SummonerSpellSetMapper(), summonerSpellSetId);

        List<Integer> summSpellIds = template.query("select isi.\"summSpellId\"\n" +
                "from \"SummonerSpellSetSummonerSpells\" as isi\n" +
                "where isi.\"summSpellSetId\" = "+summonerSpellSetId+";", new IntegerMapper("summSpellId"));

        toReturn.get(0).setSummonerSpellIdList(summSpellIds);

        return toReturn.get(0);
    }

    //UPDATE
    @Override
    public void updateSummonerSpellSet(SummonerSpellSet toUpdate) throws NullSetException, NullIdException, InvalidSetException, DuplicateComponentException, EmptyStringException, MaxNameLengthException {

        if(toUpdate == null)
            throw new NullSetException("ERROR: Tried to update summoner spell set with a null summoner spell set.");
        if(toUpdate.getSummonerSpellSetId() == null)
            throw new NullIdException("ERROR: Tried to update a summoner spell set with a null id.");
        if(!validateSummonerSpellSetId(toUpdate.getSummonerSpellSetId()))
            throw new InvalidSetException("ERROR: Tried to update a set that doesn't exist.");
        if(checkDuplicateList(toUpdate.getSummonerSpellIdList()) == false)
            throw new DuplicateComponentException("ERROR: Tried to update a set with duplicate rune id's.");
        if(!checkEmptyString(toUpdate.getSummonerSpellSetName()))
            throw new EmptyStringException("ERROR: Tried to make a summoner spell set with empty name.");
        if(toUpdate.getSummonerSpellSetName().length() > 50)
            throw new MaxNameLengthException("ERROR: Summoner Spell Set name is too long (50 characters max).");

        template.update("update \"SummonerSpellSets\" set \"summSpellSetName\" = ?, \"championId\" = ? where \"summSpellSetId\" = ?",
                toUpdate.getSummonerSpellSetName(), toUpdate.getChampionId(), toUpdate.getSummonerSpellSetId());

        //Delete all previous entries from bridge table
        template.update("delete from \"SummonerSpellSetSummonerSpells\" where \"summSpellSetId\" = ?;", toUpdate.getSummonerSpellSetId());

        //Add insert new entries into bridge
        for(Integer summSpellIdToAdd : toUpdate.getSummonerSpellIdList()) {
            template.update("insert into \"SummonerSpellSetSummonerSpells\" (\"summSpellSetId\", \"summSpellId\") values ('"+toUpdate.getSummonerSpellSetId()+"', '"+summSpellIdToAdd+"')");
        }
    }

    //DELETE
    @Override
    public void deleteSummonerSpellSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {

        if(toDeleteId == null)
            throw new NullIdException("ERROR: Tried to delete a summoner spell set with a null id.");
        if(!validateSummonerSpellSetId(toDeleteId))
            throw new InvalidSetException("ERROR: Tried to delete a set that doesn't exist.");

        template.update("delete from \"SummonerSpellSetSummonerSpells\" where \"summSpellSetId\" = ?;", toDeleteId);
        template.update("delete from \"SummonerSpellSets\" where \"summSpellSetId\" = ?;", toDeleteId);
    }

    private boolean validateSummonerSpellSetId(Integer toValidate) {

        boolean exists = true;

        Integer returnCount = template.queryForObject("select COUNT(*) from \"SummonerSpellSets\" where \"summSpellSetId\" in (?)",
                new IntegerMapper("count"), toValidate);

        Integer zero = 0;

        if(returnCount.equals(zero))
            exists = false;

        return exists;
    }

    private boolean checkEmptyString(String toCheck) {
        String toCheckCopy = toCheck;
        toCheckCopy = toCheckCopy.replaceAll(" ", "");

        if(toCheckCopy.length() == 0)
            return false;

        return true;
    }

}
