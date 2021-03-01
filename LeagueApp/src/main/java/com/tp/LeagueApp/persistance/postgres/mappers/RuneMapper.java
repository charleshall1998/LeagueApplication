package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.Rune;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RuneMapper implements RowMapper<Rune> {

    @Override
    public Rune mapRow(ResultSet resultSet, int i) throws SQLException {
        Rune mappedRune = new Rune();
        mappedRune.setRuneId(resultSet.getInt("runeId"));
        mappedRune.setRuneName(resultSet.getString("runeName"));
        mappedRune.setRuneDescription(resultSet.getString("runeDescription"));

        return mappedRune;
    }
}
