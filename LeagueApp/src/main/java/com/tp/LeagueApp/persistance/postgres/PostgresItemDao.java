package com.tp.LeagueApp.persistance.postgres;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.Item;
import com.tp.LeagueApp.persistance.interfaces.ItemDao;
import com.tp.LeagueApp.persistance.postgres.mappers.IntegerMapper;
import com.tp.LeagueApp.persistance.postgres.mappers.ItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production","daoTesting"})
public class PostgresItemDao implements ItemDao {
    @Autowired
    JdbcTemplate template;

    //READ
    @Override
    public List<Item> getAllItems() {
        List<Item> allItems = template.query("select * from \"Items\"", new ItemMapper());

        return allItems;
    }

    @Override
    public Item getItemByName(String itemName) throws NullNameException {

        if(itemName == null)
            throw new NullNameException("ERROR: Tried to get an item with a null name.");

        List<Item> toReturn = template.query("select * from \"Items\" where \"itemName\" = ?;", new ItemMapper(), itemName);

        return toReturn.get(0);
    }

    @Override
    public Item getItemById(Integer itemId) throws NullIdException, InvalidSetException {
        if(itemId == null)
            throw new NullIdException("ERROR: Tried to get an item with a null id.");
        if(!validateId(itemId))
            throw new InvalidSetException("ERROR: Tried to get an item that doesn't exist.");

        List<Item> toReturn = template.query("select * from \"Items\" where \"itemId\" = ?;", new ItemMapper(), itemId);

        return toReturn.get(0);
    }

    private boolean validateId(Integer toValidate) {

        boolean exists = true;

        Integer returnCount = template.queryForObject("select COUNT(*) from \"Items\" where \"itemId\" in (?)",
                new IntegerMapper("count"), toValidate);

        Integer zero = 0;

        if(returnCount.equals(zero))
            exists = false;

        return exists;
    }

}
