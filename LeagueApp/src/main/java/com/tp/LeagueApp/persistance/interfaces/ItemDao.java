package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.Item;

import java.util.List;

public interface ItemDao {

    //READ
    List<Item> getAllItems();
    Item getItemByName(String itemName) throws NullNameException;
    Item getItemById(Integer itemId) throws NullIdException, InvalidSetException;

}
