package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.RuneSet;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RuneSetMapper implements RowMapper<RuneSet> {

    @Override
    public RuneSet mapRow(ResultSet resultSet, int i) throws SQLException {
        RuneSet mappedRuneSet = new RuneSet();
        mappedRuneSet.setRuneSetId(resultSet.getInt("runeSetId"));
        mappedRuneSet.setRuneSetName(resultSet.getString("runeSetName"));
        mappedRuneSet.setChampionId(resultSet.getInt("championId"));

        return mappedRuneSet;
    }
}
