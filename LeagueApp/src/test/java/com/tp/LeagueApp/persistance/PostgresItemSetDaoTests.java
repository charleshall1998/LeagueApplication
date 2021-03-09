package com.tp.LeagueApp.persistance;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.ItemSet;
import com.tp.LeagueApp.persistance.postgres.PostgresItemSetDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("daoTesting")
public class PostgresItemSetDaoTests {

    @Autowired
    PostgresItemSetDao toTest;

    @Autowired
    JdbcTemplate template;

    @BeforeEach
    public void setup(){

        //need to clear all tables and reset all sequences

        template.update("truncate \"ItemSetItems\", \"RuneSetRunes\", \"SummonerSpellSetSummonerSpells\", \"ItemSets\", \"Items\",\n" +
                "\"RuneSets\", \"Runes\", \"SummonerSpellSets\", \"SummonerSpells\", \"Champions\" RESTART IDENTITY;");

        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test1', 'Test Description1', '1000')");

    }

    @Test
    public void createNewItemSetGoldenPath() {
        ItemSet itemSetToAdd = new ItemSet();
        itemSetToAdd.setItemSetName("Testing Item Set");
        itemSetToAdd.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        testList.add(2);
        itemSetToAdd.setItemIdList(testList);

        ItemSet returnedItemSet = null;
        try {
            returnedItemSet = toTest.createNewItemSet(itemSetToAdd);
        } catch (NullSetException | InvalidItemException | EmptyItemListException | DuplicateComponentException e) {
            fail();
        }

        assertEquals( 1, returnedItemSet.getItemSetId() );
        assertEquals( "Testing Item Set", returnedItemSet.getItemSetName() );
        assertEquals( 1, returnedItemSet.getChampionId());

        List<ItemSet> allItemSets = toTest.getAllItemSets();

        assertEquals( 1, allItemSets.get(0).getItemSetId() );
        assertEquals( "Testing Item Set", allItemSets.get(0).getItemSetName() );
        assertEquals( 1, allItemSets.get(0).getChampionId());
    }

    @Test
    public void createNewItemSetNullItemSetTest() {
        assertThrows(NullSetException.class, () -> toTest.createNewItemSet(null));
    }

    @Test
    public void createNewItemSetEmptyItemIdListTest() {
        ItemSet testItemSet = new ItemSet();
        testItemSet.setItemSetId(1);
        testItemSet.setItemSetName("Test");
        testItemSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testItemSet.setItemIdList(testList);

        assertThrows(EmptyItemListException.class, () -> toTest.createNewItemSet(testItemSet));
    }

    @Test
    public void createNewItemSetInvalidItemTest() {
        ItemSet testItemSet = new ItemSet();
        testItemSet.setItemSetId(1);
        testItemSet.setItemSetName("Test");
        testItemSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(100000);
        testItemSet.setItemIdList(testList);

        assertThrows(InvalidItemException.class, () -> toTest.createNewItemSet(testItemSet));
    }

    @Test
    public void createNewItemSetDuplicateComponentTest() {
        ItemSet testItemSet = new ItemSet();
        testItemSet.setItemSetId(1);
        testItemSet.setItemSetName("Test");
        testItemSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        testList.add(2);
        testList.add(2);
        testItemSet.setItemIdList(testList);

        assertThrows(DuplicateComponentException.class, () -> toTest.createNewItemSet(testItemSet));
    }

    @Test
    public void getAllItemSetsGoldenPath() {
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing2 Item Set\', \'1\')");

        List<ItemSet> toCheck = toTest.getAllItemSets();

        assertEquals( 1, toCheck.get(0).getItemSetId() );
        assertEquals( "Testing Item Set", toCheck.get(0).getItemSetName() );
        assertEquals( 1, toCheck.get(0).getChampionId());

        assertEquals( 2, toCheck.get(1).getItemSetId() );
        assertEquals( "Testing2 Item Set", toCheck.get(1).getItemSetName() );
        assertEquals( 1, toCheck.get(1).getChampionId());

    }

    @Test
    public void getItemSetByIdGoldenPath() {

        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");

        ItemSet itemSetToCheck = null;
        try {
            itemSetToCheck = toTest.getItemSetById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals( 1, itemSetToCheck.getItemSetId() );
        assertEquals( "Testing Item Set", itemSetToCheck.getItemSetName() );
        assertEquals( 1, itemSetToCheck.getChampionId());

    }

    @Test
    public void getItemSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> toTest.getItemSetById(null));
    }

    @Test
    public void getItemSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> toTest.getItemSetById(100000));
    }

    @Test
    public void updateItemSetGoldenPathTest() {
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");
        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

        ItemSet newUpdateItemSet = new ItemSet();
        newUpdateItemSet.setItemSetId(1);
        newUpdateItemSet.setItemSetName("New Update");
        newUpdateItemSet.setChampionId(2);
        List<Integer> updateItemList = new ArrayList<>();
        updateItemList.add(1);
        newUpdateItemSet.setItemIdList(updateItemList);

        try {
            toTest.updateItemSet(newUpdateItemSet);
        } catch (NullSetException | NullIdException | InvalidSetException e) {
            fail();
        }

        ItemSet toCheck = null;
        try {
            toCheck = toTest.getItemSetById(1);
        }catch (NullIdException e) {
            e.printStackTrace();
        } catch (InvalidSetException e) {
            e.printStackTrace();
        }

        assertEquals( 1, toCheck.getItemSetId() );
        assertEquals( "New Update", toCheck.getItemSetName() );
        assertEquals( 2, toCheck.getChampionId());

    }

    @Test
    public void updateItemSetNullItemSetTest() {
        assertThrows(NullSetException.class, () -> toTest.updateItemSet(null));
    }

    @Test
    public void updateItemSetInvalidItemSetTest() {
        ItemSet newUpdateItemSet = new ItemSet();
        newUpdateItemSet.setItemSetId(100000);
        newUpdateItemSet.setItemSetName("New Update");
        newUpdateItemSet.setChampionId(2);

        assertThrows(InvalidSetException.class, () -> toTest.updateItemSet(newUpdateItemSet));
    }

    @Test
    public void updateItemSetNullIdTest() {
        ItemSet toCheck = new ItemSet();
        toCheck.setItemSetId(null);
        toCheck.setItemSetName("Test");
        toCheck.setChampionId(1);

        assertThrows(NullIdException.class, () -> toTest.updateItemSet(toCheck));
    }

    @Test
    public void deleteItemSetByIdGoldenPath() {
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");

        try {
            toTest.deleteItemSetById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        List<ItemSet> toCheck = toTest.getAllItemSets();

        assertEquals(0, toCheck.size());
    }

    @Test
    public void deleteItemSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> toTest.deleteItemSetById(null));
    }

    @Test
    public void deleteItemSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> toTest.deleteItemSetById(100000));
    }
}
