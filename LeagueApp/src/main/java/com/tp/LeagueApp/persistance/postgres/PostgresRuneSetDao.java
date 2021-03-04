package com.tp.LeagueApp.persistance.postgres;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.RuneSet;
import com.tp.LeagueApp.persistance.interfaces.RuneSetDao;
import com.tp.LeagueApp.persistance.postgres.mappers.IntegerMapper;
import com.tp.LeagueApp.persistance.postgres.mappers.RuneSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production","daoTesting"})
public class PostgresRuneSetDao implements RuneSetDao {

    @Autowired
    JdbcTemplate template;

    //CREATE
    @Override
    public RuneSet createNewRuneSet(RuneSet toAdd) throws NullSetException, InvalidRuneException, EmptyRuneListException {

        if(toAdd == null)
            throw new NullSetException("ERROR: Tried to create a null rune set.");
        if(toAdd.getRuneIdList().size() == 0)
            throw new EmptyRuneListException("ERROR: Empty rune list.");

        //Add validate items
        if(!validateRuneList(toAdd.getRuneIdList()))
            throw new InvalidRuneException("Rune in list is not valid.");

        Integer runeSetId = template.queryForObject("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (?, ?) RETURNING \"runeSetId\";",
                new IntegerMapper("runeSetId"),
                toAdd.getRuneSetName(),
                toAdd.getChampionId()
        );

        //Add insert into bridge
        for(Integer runeIdToAdd : toAdd.getRuneIdList()) {
            template.update("insert into \"RuneSetRunes\" (\"runeSetId\", \"runeId\") values ('"+runeSetId+"', '"+runeIdToAdd+"')");
        }

        toAdd.setRuneSetId(runeSetId);

        return toAdd;
    }

    private boolean validateRuneList(List<Integer> toCheck) {
        boolean equal = true;

        Integer queryCount = 0;

        for(Integer toValidate : toCheck) {
            queryCount += template.queryForObject("select COUNT(*) from \"Runes\" where \"runeId\" in (?)",
                    new IntegerMapper("count"), toValidate);
        }

        Integer toCheckCount = toCheck.size();

        if(!queryCount.equals(toCheckCount))
            equal = false;

        return equal;
    }

    //READ
    @Override
    public List<RuneSet> getAllRuneSets() {
        List<RuneSet> allRuneSets = template.query("select * from \"RuneSets\"",
                new RuneSetMapper());

        for(RuneSet toGet : allRuneSets) {
            List<Integer> runeIds = template.query("select isi.\"runeId\"\n" +
                    "from \"RuneSetRunes\" as isi\n" +
                    "where isi.\"runeSetId\" = ?;", new IntegerMapper("runeId"), toGet.getRuneSetId());

            toGet.setRuneIdList(runeIds);
        }

        return allRuneSets;
    }

    @Override
    public RuneSet getRuneSetById(Integer runeSetId) throws NullIdException, InvalidSetException {

        if(runeSetId == null)
            throw new NullIdException("ERROR: Tried to get a rune set with a null id.");
        if(!validateRuneSetId(runeSetId))
            throw new InvalidSetException("ERROR: Tried to get a rune set that doesn't exist.");

        List<RuneSet> toReturn = template.query("select * from \"RuneSets\" where \"runeSetId\" = ?;",
                new RuneSetMapper(), runeSetId);

        List<Integer> runeIds = template.query("select isi.\"runeId\"\n" +
                "from \"RuneSetRunes\" as isi\n" +
                "where isi.\"runeSetId\" = "+runeSetId+";", new IntegerMapper("runeId"));

        toReturn.get(0).setRuneIdList(runeIds);

        return toReturn.get(0);
    }

    //UPDATE
    @Override
    public void updateRuneSet(RuneSet toUpdate) throws NullSetException, NullIdException, InvalidSetException {

        if(toUpdate == null)
            throw new NullSetException("ERROR: Tried to update rune set with a null rune set.");
        if(toUpdate.getRuneSetId() == null)
            throw new NullIdException("ERROR: Tried to update a rune set with a null id.");
        if(!validateRuneSetId(toUpdate.getRuneSetId()))
            throw new InvalidSetException("ERROR: Tried to delete a set that doesn't exist.");

        template.update("update \"RuneSets\" set \"runeSetName\" = ?, \"championId\" = ? where \"runeSetId\" = ?",
                toUpdate.getRuneSetName(), toUpdate.getChampionId(), toUpdate.getRuneSetId());

        //Delete all previous entries from bridge table
        template.update("delete from \"RuneSetRunes\" where \"runeSetId\" = ?;", toUpdate.getRuneSetId());

        //Add insert new entries into bridge
        for(Integer runeIdToAdd : toUpdate.getRuneIdList()) {
            template.update("insert into \"RuneSetRunes\" (\"runeSetId\", \"runeId\") values ('"+toUpdate.getRuneSetId()+"', '"+runeIdToAdd+"')");
        }
    }

    //DELETE
    @Override
    public void deleteRuneSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {

        if(toDeleteId == null)
            throw new NullIdException("ERROR: Tried to delete a rune set with a null id.");
        if(!validateRuneSetId(toDeleteId))
            throw new InvalidSetException("ERROR: Tried to delete a set that doesn't exist.");

        template.update("delete from \"RuneSetRunes\" where \"runeSetId\" = ?;", toDeleteId);
        template.update("delete from \"RuneSets\" where \"runeSetId\" = ?;", toDeleteId);
    }

    private boolean validateRuneSetId(Integer toValidate) {

        boolean exists = true;

        Integer returnCount = template.queryForObject("select COUNT(*) from \"RuneSets\" where \"runeSetId\" in (?)",
                new IntegerMapper("count"), toValidate);

        Integer zero = 0;

        if (returnCount.equals(zero))
            exists = false;

        return exists;
    }
}
