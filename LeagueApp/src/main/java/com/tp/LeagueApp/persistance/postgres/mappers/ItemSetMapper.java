package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.ItemSet;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemSetMapper implements RowMapper<ItemSet> {

    @Override
    public ItemSet mapRow(ResultSet resultSet, int i) throws SQLException {
        ItemSet mappedItemSet = new ItemSet();
        mappedItemSet.setItemSetId(resultSet.getInt("itemSetId"));
        mappedItemSet.setItemSetName(resultSet.getString("itemSetName"));
        mappedItemSet.setChampionId(resultSet.getInt("championId"));


        return mappedItemSet;
    }
}
