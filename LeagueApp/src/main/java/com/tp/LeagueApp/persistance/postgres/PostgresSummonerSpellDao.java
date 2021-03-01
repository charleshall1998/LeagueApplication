package com.tp.LeagueApp.persistance.postgres;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.SummonerSpell;
import com.tp.LeagueApp.persistance.interfaces.SummonerSpellDao;
import com.tp.LeagueApp.persistance.postgres.mappers.IntegerMapper;
import com.tp.LeagueApp.persistance.postgres.mappers.SummonerSpellMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production","daoTesting"})
public class PostgresSummonerSpellDao implements SummonerSpellDao {
    @Autowired
    JdbcTemplate template;

    //READ
    @Override
    public List<SummonerSpell> getAllSummonerSpells() {
        List<SummonerSpell> allSummonerSpells = template.query("select * from \"SummonerSpells\"",
                new SummonerSpellMapper());

        return allSummonerSpells;
    }

    @Override
    public SummonerSpell getSummonerSpellByName(String summonerSpellName) throws NullNameException {

        if(summonerSpellName == null)
            throw new NullNameException("ERROR: Tried to get a summoner spell with a null name.");

        List<SummonerSpell> toReturn = template.query("select * from \"SummonerSpells\" where \"summSpellName\" = ?;",
                new SummonerSpellMapper(), summonerSpellName);

        return toReturn.get(0);
    }

    @Override
    public SummonerSpell getSummonerSpellById(Integer summonerSpellId) throws NullIdException, InvalidSetException {
        if(summonerSpellId == null)
            throw new NullIdException("ERROR: Tried to get a summoner spell with a null id.");
        if(!validateId(summonerSpellId))
            throw new InvalidSetException("ERROR: Tried to get a summoner spell with an invalid id.");

        List<SummonerSpell> toReturn = template.query("select * from \"SummonerSpells\" where \"summSpellId\" = ?;",
                new SummonerSpellMapper(), summonerSpellId);

        return toReturn.get(0);
    }

    private boolean validateId(Integer toValidate) {

        boolean exists = true;

        Integer returnCount = template.queryForObject("select COUNT(*) from \"SummonerSpells\" where \"summSpellId\" in (?)",
                new IntegerMapper("count"), toValidate);

        Integer zero = 0;

        if(returnCount.equals(zero))
            exists = false;

        return exists;
    }

}
