package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.Item;

import java.util.List;

public interface ItemDao {

    //READ
    List<Item> getAllItems();
    Item getItemByName(String itemName) throws NullNameException, EmptyStringException, InvalidItemException;
    Item getItemById(Integer itemId) throws NullIdException, InvalidItemException;

}
