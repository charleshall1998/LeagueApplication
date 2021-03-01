package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.SummonerSpell;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SummonerSpellMapper implements RowMapper<SummonerSpell> {

    @Override
    public SummonerSpell mapRow(ResultSet resultSet, int i) throws SQLException {
        SummonerSpell mappedSummonerSpell = new SummonerSpell();
        mappedSummonerSpell.setSummonerSpellId(resultSet.getInt("summSpellId"));
        mappedSummonerSpell.setSummonerSpellName(resultSet.getString("summSpellName"));
        mappedSummonerSpell.setSummonerSpellDescription(resultSet.getString("summSpellDescription"));

        return mappedSummonerSpell;
    }
}
