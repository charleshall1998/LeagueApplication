package com.tp.LeagueApp.persistance.postgres.mappers;

import com.tp.LeagueApp.models.Item;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemMapper implements RowMapper<Item> {

    public Item mapRow(ResultSet resultSet, int i) throws SQLException {
        Item mappedItem = new Item();
        mappedItem.setItemId(resultSet.getInt("itemId"));
        mappedItem.setItemName(resultSet.getString("itemName"));
        mappedItem.setItemDescription(resultSet.getString("itemDescription"));
        mappedItem.setItemCost(resultSet.getInt("itemCost"));

        return mappedItem;
    }
}
