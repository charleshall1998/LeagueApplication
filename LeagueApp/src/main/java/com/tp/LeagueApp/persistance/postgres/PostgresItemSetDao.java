package com.tp.LeagueApp.persistance.postgres;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.ItemSet;
import com.tp.LeagueApp.persistance.interfaces.ItemSetDao;
import com.tp.LeagueApp.persistance.postgres.mappers.IntegerMapper;
import com.tp.LeagueApp.persistance.postgres.mappers.ItemSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;

@Component
@Profile({"production","daoTesting"})
public class PostgresItemSetDao implements ItemSetDao {
    @Autowired
    JdbcTemplate template;

    //CREATE
    @Override
    public ItemSet createNewItemSet(ItemSet toAdd) throws NullSetException, InvalidItemException,
            EmptyItemListException, DuplicateComponentException, MaxNameLengthException {

        if(toAdd == null)
            throw new NullSetException("ERROR: Tried to create a null item set.");
        if(toAdd.getItemIdList().size() == 0)
            throw new EmptyItemListException("ERROR: Empty item list.");
        if(checkDuplicateList(toAdd.getItemIdList()) == false)
            throw new DuplicateComponentException("ERROR: Duplicate id's in item list.");
        if(toAdd.getItemSetName().length() > 50)
            throw new MaxNameLengthException("ERROR: Item Set name is too long (50 characters max).");

        //Add validate items
        if(!validateItemList(toAdd.getItemIdList()))
            throw new InvalidItemException("Item in list is not valid.");

        Integer itemSetId = template.queryForObject("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (?, ?) RETURNING \"itemSetId\";",
                new IntegerMapper("itemSetId"),
                toAdd.getItemSetName(),
                toAdd.getChampionId()
        );

        //Add insert into bridge
        for(Integer itemIdToAdd : toAdd.getItemIdList()) {
            template.update("insert into \"ItemSetItems\" (\"itemSetId\", \"itemId\") values ('"+itemSetId+"', '"+itemIdToAdd+"')");
        }

        toAdd.setItemSetId(itemSetId);

        return toAdd;
    }

    private boolean checkDuplicateList(List<Integer> toCheck) {
        java.util.HashSet unique = new HashSet();
        for (Integer id : toCheck){
            if(!unique.add(id)){
                return false;
            }
        }
        return true;
    }

    private boolean validateItemList(List<Integer> toCheck) {
        boolean equal = true;

        Integer queryCount = 0;

        for(Integer toValidate : toCheck) {
            queryCount += template.queryForObject("select COUNT(*) from \"Items\" where \"itemId\" in (?)",
                    new IntegerMapper("count"), toValidate);
        }

        Integer toCheckCount = toCheck.size();

        if(!queryCount.equals(toCheckCount))
            equal = false;

        return equal;
    }

    //READ
    @Override
    public List<ItemSet> getAllItemSets() {
        List<ItemSet> allItemSets = template.query("select * from \"ItemSets\"",
                new ItemSetMapper());

        for(ItemSet toGet : allItemSets) {
            List<Integer> itemIds = template.query("select isi.\"itemId\"\n" +
                    "from \"ItemSetItems\" as isi\n" +
                    "where isi.\"itemSetId\" = ?;", new IntegerMapper("itemId"), toGet.getItemSetId());

            toGet.setItemIdList(itemIds);
        }

        return allItemSets;
    }

    @Override
    public ItemSet getItemSetById(Integer itemSetId) throws NullIdException, InvalidSetException {

        if(itemSetId == null)
            throw new NullIdException("ERROR: Tried to get an item set with a null id.");
        if(!validateItemSetId(itemSetId))
            throw new InvalidSetException("ERROR: Tried to get a set that doesn't exist.");

        List<ItemSet> toReturn = template.query("select * from \"ItemSets\" where \"itemSetId\" = ?;",
                new ItemSetMapper(), itemSetId);

        List<Integer> itemIds = template.query("select isi.\"itemId\"\n" +
                "from \"ItemSetItems\" as isi\n" +
                "where isi.\"itemSetId\" = "+itemSetId+";", new IntegerMapper("itemId"));

        toReturn.get(0).setItemIdList(itemIds);


        return toReturn.get(0);
    }

    //UPDATE
    @Override
    public void updateItemSet(ItemSet toUpdate) throws NullSetException, NullIdException,
            InvalidSetException,DuplicateComponentException {

        if(toUpdate == null)
            throw new NullSetException("ERROR: Tried to update item set with a null item set.");
        if(toUpdate.getItemSetId() == null)
            throw new NullIdException("ERROR: Tried to update an item set with a null id.");
        if(!validateItemSetId(toUpdate.getItemSetId()))
            throw new InvalidSetException("ERROR: Tried to update a set that doesn't exist.");
        if(checkDuplicateList(toUpdate.getItemIdList()) == false)
            throw new DuplicateComponentException("ERROR: Tried to update a set with duplicate item id's");

        template.update("update \"ItemSets\" set \"itemSetName\" = ?, \"championId\" = ? where \"itemSetId\" = ?",
                toUpdate.getItemSetName(), toUpdate.getChampionId(), toUpdate.getItemSetId());

        //Delete all previous entries from the bridge table
        template.update("delete from \"ItemSetItems\" where \"itemSetId\" = ?;", toUpdate.getItemSetId());

        //Insert new entries into bridge table
        for(Integer itemIdToAdd : toUpdate.getItemIdList()) {
            template.update("insert into \"ItemSetItems\" (\"itemSetId\", \"itemId\") values ('"+toUpdate.getItemSetId()+"', '"+itemIdToAdd+"')");
        }

    }

    //DELETE
    @Override
    public void deleteItemSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        if(toDeleteId == null)
            throw new NullIdException("ERROR: Tried to delete an item set with a null id.");
        if(!validateItemSetId(toDeleteId))
            throw new InvalidSetException("ERROR: Tried to delete a set that doesn't exist.");

        template.update("delete from \"ItemSetItems\" where \"itemSetId\" = ?;", toDeleteId);
        template.update("delete from \"ItemSets\" where \"itemSetId\" = ?;", toDeleteId);
    }

    private boolean validateItemSetId(Integer toValidate) {

        boolean exists = true;

        Integer returnCount = template.queryForObject("select COUNT(*) from \"ItemSets\" where \"itemSetId\" in (?)",
                new IntegerMapper("count"), toValidate);

        Integer zero = 0;

        if(returnCount.equals(zero))
            exists = false;

        return exists;
    }


}
