package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.ItemSet;

import java.util.List;

public interface ItemSetDao {

    //CREATE
    ItemSet createNewItemSet(ItemSet toAdd) throws NullSetException, InvalidItemException,
            EmptyItemListException, DuplicateComponentException;

    //READ
    List<ItemSet> getAllItemSets();
    ItemSet getItemSetById(Integer itemSetId) throws NullIdException, InvalidSetException;

    //UPDATE
    void updateItemSet(ItemSet toUpdate) throws NullSetException, NullIdException, InvalidSetException;

    //DELETE
    void deleteItemSetById(Integer toDeleteId) throws NullIdException, InvalidSetException;


}
