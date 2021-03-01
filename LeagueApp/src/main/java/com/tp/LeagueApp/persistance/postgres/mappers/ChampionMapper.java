package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.Champion;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ChampionMapper implements RowMapper<Champion> {

    @Override
    public Champion mapRow(ResultSet resultSet, int i) throws SQLException {
        Champion mappedChampion = new Champion();
        mappedChampion.setChampionId(resultSet.getInt("championId"));
        mappedChampion.setChampionName(resultSet.getString("championName"));
        mappedChampion.setChampionDescription(resultSet.getString("championDescription"));
        mappedChampion.setWinRate(resultSet.getBigDecimal("winRate"));
        mappedChampion.setPickRate(resultSet.getBigDecimal("pickRate"));
        mappedChampion.setBanRate(resultSet.getBigDecimal("banRate"));
        mappedChampion.setAvgKDA(resultSet.getBigDecimal("avgKDA"));

        return mappedChampion;
    }
}
