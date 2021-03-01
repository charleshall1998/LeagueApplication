package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.SummonerSpellSet;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SummonerSpellSetMapper implements RowMapper<SummonerSpellSet> {

    @Override
    public SummonerSpellSet mapRow(ResultSet resultSet, int i) throws SQLException {
        SummonerSpellSet mappedSummonerSpellSet = new SummonerSpellSet();
        mappedSummonerSpellSet.setSummonerSpellSetId(resultSet.getInt("summSpellSetId"));
        mappedSummonerSpellSet.setSummonerSpellSetName(resultSet.getString("summSpellSetName"));
        mappedSummonerSpellSet.setChampionId(resultSet.getInt("championId"));

        return mappedSummonerSpellSet;
    }
}
