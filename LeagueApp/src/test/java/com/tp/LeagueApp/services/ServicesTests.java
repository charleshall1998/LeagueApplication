package com.tp.LeagueApp.services;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class ServicesTests {

    @Autowired
    LeagueAppService service;

    @Autowired
    JdbcTemplate template;

    @BeforeEach
    public void setup(){

        //need to clear all tables and reset all sequences

        template.update("truncate \"ItemSetItems\", \"RuneSetRunes\", \"SummonerSpellSetSummonerSpells\", \"ItemSets\", \"Items\",\n" +
                "\"RuneSets\", \"Runes\", \"SummonerSpellSets\", \"SummonerSpells\", \"Champions\" RESTART IDENTITY;");

        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

    }

    //**********
    //CHAMPION TESTS
    //**********
    @Test
    public void getAllChampionsGoldenPath() {
        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test2','Test2 Description', '2','2','2','2')");

        List<Champion> toCheck = service.getAllChampions();

        BigDecimal one = BigDecimal.valueOf(1);
        BigDecimal two = BigDecimal.valueOf(2);

        assertEquals(1, toCheck.get(0).getChampionId());
        assertEquals("Test", toCheck.get(0).getChampionName());
        assertEquals("Test Description", toCheck.get(0).getChampionDescription());
        assertEquals(one, toCheck.get(0).getWinRate());
        assertEquals(one, toCheck.get(0).getPickRate());
        assertEquals(one, toCheck.get(0).getBanRate());
        assertEquals(one, toCheck.get(0).getAvgKDA());

        assertEquals(2, toCheck.get(1).getChampionId());
        assertEquals("Test2", toCheck.get(1).getChampionName());
        assertEquals("Test2 Description", toCheck.get(1).getChampionDescription());
        assertEquals(two, toCheck.get(1).getWinRate());
        assertEquals(two, toCheck.get(1).getPickRate());
        assertEquals(two, toCheck.get(1).getBanRate());
        assertEquals(two, toCheck.get(1).getAvgKDA());

    }

    @Test
    public void getChampionByNameGoldenPath() {

        Champion toCheck = null;
        try {
            toCheck = service.getChampionByName("Test");
        } catch (NullNameException e) {
            fail();
        }

        BigDecimal one = BigDecimal.valueOf(1);

        assertEquals(1, toCheck.getChampionId());
        assertEquals("Test", toCheck.getChampionName());
        assertEquals("Test Description", toCheck.getChampionDescription());
        assertEquals(one, toCheck.getWinRate());
        assertEquals(one, toCheck.getPickRate());
        assertEquals(one, toCheck.getBanRate());
        assertEquals(one, toCheck.getAvgKDA());

    }

    @Test
    public void getChampionByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> service.getChampionByName(null));
    }

    @Test
    public void getChampionByIdGoldenPath() {

        Champion toCheck = null;
        try {
            toCheck = service.getChampionById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        BigDecimal one = BigDecimal.valueOf(1);

        assertEquals(1, toCheck.getChampionId());
        assertEquals("Test", toCheck.getChampionName());
        assertEquals("Test Description", toCheck.getChampionDescription());
        assertEquals(one, toCheck.getWinRate());
        assertEquals(one, toCheck.getPickRate());
        assertEquals(one, toCheck.getBanRate());
        assertEquals(one, toCheck.getAvgKDA());

    }

    @Test
    public void getChampionByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getChampionById(null));
    }

    @Test
    public void getChampionByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getChampionById(100000));
    }




    //**********
    //ITEM TESTS
    //**********
    @Test
    public void getAllItemsGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test2', 'Test2 Description', '2000')");

        List<Item> toCheck = service.getAllItems();

        assertEquals(1, toCheck.get(0).getItemId());
        assertEquals("Test", toCheck.get(0).getItemName());
        assertEquals("Test Description", toCheck.get(0).getItemDescription());
        assertEquals(1000, toCheck.get(0).getItemCost());

        assertEquals(2, toCheck.get(1).getItemId());
        assertEquals("Test2", toCheck.get(1).getItemName());
        assertEquals("Test2 Description", toCheck.get(1).getItemDescription());
        assertEquals(2000, toCheck.get(1).getItemCost());

    }

    @Test
    public void getItemByNameGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");

        Item toCheck = null;
        try {
            toCheck = service.getItemByName("Test");
        }
        catch(NullNameException e) {
            fail();
        }

        assertEquals(1, toCheck.getItemId());
        assertEquals("Test", toCheck.getItemName());
        assertEquals("Test Description", toCheck.getItemDescription());
        assertEquals(1000, toCheck.getItemCost());

    }

    @Test
    public void getItemByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> service.getItemByName(null));
    }

    @Test
    public void getItemByIdGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");

        Item toCheck = null;
        try {
            toCheck = service.getItemById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals(1, toCheck.getItemId());
        assertEquals("Test", toCheck.getItemName());
        assertEquals("Test Description", toCheck.getItemDescription());
        assertEquals(1000, toCheck.getItemCost());

    }

    @Test
    public void getItemByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getItemById(null));
    }

    @Test
    public void getItemByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getItemById(100000));
    }



    //**********
    //RUNE TESTS
    //**********
    @Test
    public void getAllRunesGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test2', 'Test2 Description')");

        List<Rune> toCheck = service.getAllRunes();

        assertEquals(1, toCheck.get(0).getRuneId());
        assertEquals("Test", toCheck.get(0).getRuneName());
        assertEquals("Test Description", toCheck.get(0).getRuneDescription());

        assertEquals(2, toCheck.get(1).getRuneId());
        assertEquals("Test2", toCheck.get(1).getRuneName());
        assertEquals("Test2 Description", toCheck.get(1).getRuneDescription());

    }

    @Test
    public void getRuneByNameGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");

        Rune toCheck = null;
        try {
            toCheck = service.getRuneByName("Test");
        }
        catch(NullNameException e) {
            fail();
        }

        assertEquals(1, toCheck.getRuneId());
        assertEquals("Test", toCheck.getRuneName());
        assertEquals("Test Description", toCheck.getRuneDescription());

    }

    @Test
    public void getRuneByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> service.getRuneByName(null));
    }

    @Test
    public void getRuneByIdGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");

        Rune toCheck = null;
        try {
            toCheck = service.getRuneById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals(1, toCheck.getRuneId());
        assertEquals("Test", toCheck.getRuneName());
        assertEquals("Test Description", toCheck.getRuneDescription());

    }

    @Test
    public void getRuneByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getRuneById(null));
    }

    @Test
    public void getRuneByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getRuneById(100000));
    }




    //**********
    //SUMMONER SPELL TESTS
    //**********
    @Test
    public void getAllSummonerSpellsGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test2', 'Test2 Description')");

        List<SummonerSpell> toCheck = service.getAllSummonerSpells();

        assertEquals(1, toCheck.get(0).getSummonerSpellId());
        assertEquals("Test", toCheck.get(0).getSummonerSpellName());
        assertEquals("Test Description", toCheck.get(0).getSummonerSpellDescription());

        assertEquals(2, toCheck.get(1).getSummonerSpellId());
        assertEquals("Test2", toCheck.get(1).getSummonerSpellName());
        assertEquals("Test2 Description", toCheck.get(1).getSummonerSpellDescription());

    }

    @Test
    public void getSummonerSpellByNameGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");

        SummonerSpell toCheck = null;
        try {
            toCheck = service.getSummonerSpellByName("Test");
        }
        catch(NullNameException e) {
            fail();
        }

        assertEquals(1, toCheck.getSummonerSpellId());
        assertEquals("Test", toCheck.getSummonerSpellName());
        assertEquals("Test Description", toCheck.getSummonerSpellDescription());

    }

    @Test
    public void getSummonerSpellByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> service.getSummonerSpellByName(null));
    }

    @Test
    public void getSummonerSpellByIdGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");

        SummonerSpell toCheck = null;
        try {
            toCheck = service.getSummonerSpellById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals(1, toCheck.getSummonerSpellId());
        assertEquals("Test", toCheck.getSummonerSpellName());
        assertEquals("Test Description", toCheck.getSummonerSpellDescription());

    }

    @Test
    public void getSummonerSpellByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getSummonerSpellById(null));
    }

    @Test
    public void getSummonerSpellByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getSummonerSpellById(100000));
    }



    //**********
    //ITEM SET TESTS
    //**********
    @Test
    public void createNewItemSetGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");

        ItemSet itemSetToAdd = new ItemSet();
        itemSetToAdd.setItemSetName("Testing Item Set");
        itemSetToAdd.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        itemSetToAdd.setItemIdList(testList);

        ItemSet returnedItemSet = null;
        try {
            returnedItemSet = service.createNewItemSet(itemSetToAdd);
        } catch (NullSetException | InvalidItemException | EmptyItemListException e) {
            fail();
        }

        assertEquals( 1, returnedItemSet.getItemSetId() );
        assertEquals( "Testing Item Set", returnedItemSet.getItemSetName() );
        assertEquals( 1, returnedItemSet.getChampionId());

        List<ItemSet> allItemSets = service.getAllItemSets();

        assertEquals( 1, allItemSets.get(0).getItemSetId() );
        assertEquals( "Testing Item Set", allItemSets.get(0).getItemSetName() );
        assertEquals( 1, allItemSets.get(0).getChampionId());
    }

    @Test
    public void createNewItemSetNullItemSetTest() {
        assertThrows(NullSetException.class, () -> service.createNewItemSet(null));
    }

    @Test
    public void createNewItemSetEmptyItemIdListTest() {
        ItemSet testItemSet = new ItemSet();
        testItemSet.setItemSetId(1);
        testItemSet.setItemSetName("Test");
        testItemSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testItemSet.setItemIdList(testList);

        assertThrows(EmptyItemListException.class, () -> service.createNewItemSet(testItemSet));
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

        assertThrows(InvalidItemException.class, () -> service.createNewItemSet(testItemSet));
    }

    @Test
    public void getAllItemSetsGoldenPath() {
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing2 Item Set\', \'1\')");

        List<ItemSet> toCheck = service.getAllItemSets();

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
            itemSetToCheck = service.getItemSetById(1);
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
        assertThrows(NullIdException.class, () -> service.getItemSetById(null));
    }

    @Test
    public void getItemSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getItemSetById(100000));
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

        try {
            service.updateItemSet(newUpdateItemSet);
        } catch (NullSetException | NullIdException | InvalidSetException e) {
            fail();
        }

        ItemSet toCheck = null;
        try {
            toCheck = service.getItemSetById(1);
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
        assertThrows(NullSetException.class, () -> service.updateItemSet(null));
    }

    @Test
    public void updateItemSetInvalidItemSetTest() {
        ItemSet newUpdateItemSet = new ItemSet();
        newUpdateItemSet.setItemSetId(100000);
        newUpdateItemSet.setItemSetName("New Update");
        newUpdateItemSet.setChampionId(2);

        assertThrows(InvalidSetException.class, () -> service.updateItemSet(newUpdateItemSet));
    }

    @Test
    public void updateItemSetNullIdTest() {
        ItemSet toCheck = new ItemSet();
        toCheck.setItemSetId(null);
        toCheck.setItemSetName("Test");
        toCheck.setChampionId(1);

        assertThrows(NullIdException.class, () -> service.updateItemSet(toCheck));
    }

    @Test
    public void deleteItemSetByIdGoldenPath() {
        template.update("insert into \"ItemSets\" (\"itemSetName\", \"championId\") values (\'Testing Item Set\', \'1\')");

        try {
            service.deleteItemSetById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        List<ItemSet> toCheck = service.getAllItemSets();

        assertEquals(0, toCheck.size());
    }

    @Test
    public void deleteItemSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.deleteItemSetById(null));
    }

    @Test
    public void deleteItemSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.deleteItemSetById(100000));
    }




    //**********
    //RUNE SET TESTS
    //**********
    @Test
    public void createNewRuneSetGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");

        RuneSet runeSetToAdd = new RuneSet();
        runeSetToAdd.setRuneSetName("Testing Rune Set");
        runeSetToAdd.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        runeSetToAdd.setRuneIdList(testList);

        RuneSet returnedRuneSet = null;
        try {
            returnedRuneSet = service.createNewRuneSet(runeSetToAdd);
        } catch (NullSetException | InvalidRuneException | EmptyRuneListException e) {
            fail();
        }

        assertEquals( 1, returnedRuneSet.getRuneSetId() );
        assertEquals( "Testing Rune Set", returnedRuneSet.getRuneSetName() );
        assertEquals( 1, returnedRuneSet.getChampionId());

        List<RuneSet> allRuneSets = service.getAllRuneSets();

        assertEquals( 1, allRuneSets.get(0).getRuneSetId() );
        assertEquals( "Testing Rune Set", allRuneSets.get(0).getRuneSetName() );
        assertEquals( 1, allRuneSets.get(0).getChampionId());
    }

    @Test
    public void createNewRuneSetNullRuneSetTest() {
        assertThrows(NullSetException.class, () -> service.createNewRuneSet(null));
    }

    @Test
    public void createNewRuneSetEmptyRuneIdListTest() {
        RuneSet testRuneSet = new RuneSet();
        testRuneSet.setRuneSetId(1);
        testRuneSet.setRuneSetName("Test");
        testRuneSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testRuneSet.setRuneIdList(testList);

        assertThrows(EmptyRuneListException.class, () -> service.createNewRuneSet(testRuneSet));
    }

    @Test
    public void createNewRuneSetInvalidRuneListTest() {
        RuneSet testRuneSet = new RuneSet();
        testRuneSet.setRuneSetId(1);
        testRuneSet.setRuneSetName("Test");
        testRuneSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(100000);
        testRuneSet.setRuneIdList(testList);

        assertThrows(InvalidRuneException.class, () -> service.createNewRuneSet(testRuneSet));
    }

    @Test
    public void getAllRuneSetsGoldenPath() {
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing2 Rune Set\', \'1\')");

        List<RuneSet> toCheck = service.getAllRuneSets();

        assertEquals( 1, toCheck.get(0).getRuneSetId() );
        assertEquals( "Testing Rune Set", toCheck.get(0).getRuneSetName() );
        assertEquals( 1, toCheck.get(0).getChampionId());

        assertEquals( 2, toCheck.get(1).getRuneSetId() );
        assertEquals( "Testing2 Rune Set", toCheck.get(1).getRuneSetName() );
        assertEquals( 1, toCheck.get(1).getChampionId());

    }


    @Test
    public void getRuneSetByIdGoldenPath() {

        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");

        RuneSet runeSetToCheck = null;
        try {
            runeSetToCheck = service.getRuneSetById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals( 1, runeSetToCheck.getRuneSetId() );
        assertEquals( "Testing Rune Set", runeSetToCheck.getRuneSetName() );
        assertEquals( 1, runeSetToCheck.getChampionId());

    }

    @Test
    public void getRuneSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getRuneSetById(null));
    }

    @Test
    public void getRuneSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getRuneSetById(100000));
    }

    @Test
    public void updateRuneSetGoldenPathTest() {
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");
        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

        RuneSet newUpdateRuneSet = new RuneSet();
        newUpdateRuneSet.setRuneSetId(1);
        newUpdateRuneSet.setRuneSetName("New Update");
        newUpdateRuneSet.setChampionId(2);

        try {
            service.updateRuneSet(newUpdateRuneSet);
        } catch (NullSetException | NullIdException | InvalidSetException e) {
            fail();
        }

        RuneSet toCheck = null;
        try {
            toCheck = service.getRuneSetById(1);
        } catch (NullIdException e) {
            e.printStackTrace();
        } catch (InvalidSetException e) {
            e.printStackTrace();
        }

        assertEquals( 1, toCheck.getRuneSetId() );
        assertEquals( "New Update", toCheck.getRuneSetName() );
        assertEquals( 2, toCheck.getChampionId());

    }

    @Test
    public void updateRuneSetNullRuneSetTest() {
        assertThrows(NullSetException.class, () -> service.updateRuneSet(null));
    }

    @Test
    public void updateRuneSetInvalidRuneSetTest() {
        RuneSet newUpdateRuneSet = new RuneSet();
        newUpdateRuneSet.setRuneSetId(100000);
        newUpdateRuneSet.setRuneSetName("New Update");
        newUpdateRuneSet.setChampionId(2);

        assertThrows(InvalidSetException.class, () -> service.updateRuneSet(newUpdateRuneSet));
    }

    @Test
    public void updateRuneSetNullIdTest() {
        RuneSet toCheck = new RuneSet();
        toCheck.setRuneSetId(null);
        toCheck.setRuneSetName("Test");
        toCheck.setChampionId(1);

        assertThrows(NullIdException.class, () -> service.updateRuneSet(toCheck));
    }

    @Test
    public void deleteRuneSetByIdGoldenPath() {
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");

        try {
            service.deleteRuneSetById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        List<RuneSet> toCheck = service.getAllRuneSets();

        assertEquals(0, toCheck.size());
    }

    @Test
    public void deleteRuneSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.deleteRuneSetById(null));
    }

    @Test
    public void deleteRuneSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.deleteRuneSetById(100000));
    }




    //**********
    //SUMMONER SPELL SET TESTS
    //**********
    @Test
    public void createNewSummonerSpellSetGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");

        SummonerSpellSet summSetToAdd = new SummonerSpellSet();
        summSetToAdd.setSummonerSpellSetName("Testing Summ Set");
        summSetToAdd.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        summSetToAdd.setSummonerSpellIdList(testList);

        SummonerSpellSet returnedSummonerSpellSet = null;
        try {
            returnedSummonerSpellSet = service.createNewSummonerSpellSet(summSetToAdd);
        } catch (NullSetException | EmptySummonerSpellListException | InvalidSummonerSpellException e) {
            fail();
        }

        assertEquals( 1, returnedSummonerSpellSet.getSummonerSpellSetId() );
        assertEquals( "Testing Summ Set", returnedSummonerSpellSet.getSummonerSpellSetName() );
        assertEquals( 1, returnedSummonerSpellSet.getChampionId());

        List<SummonerSpellSet> allItemSets = service.getAllSummonerSpellSets();

        assertEquals( 1, allItemSets.get(0).getSummonerSpellSetId() );
        assertEquals( "Testing Summ Set", allItemSets.get(0).getSummonerSpellSetName() );
        assertEquals( 1, allItemSets.get(0).getChampionId());
    }

    @Test
    public void createNewSummonerSpellSetNullSummonerSpellSetTest() {
        assertThrows(NullSetException.class, () -> service.createNewSummonerSpellSet(null));
    }

    @Test
    public void createNewSummonerSpellSetEmptySummonerSpellIdListTest() {
        SummonerSpellSet testSummSpellSet = new SummonerSpellSet();
        testSummSpellSet.setSummonerSpellSetId(1);
        testSummSpellSet.setSummonerSpellSetName("Test");
        testSummSpellSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testSummSpellSet.setSummonerSpellIdList(testList);

        assertThrows(EmptySummonerSpellListException.class, () -> service.createNewSummonerSpellSet(testSummSpellSet));
    }

    @Test
    public void createNewSummonerSpellSetInvalidSummonerSpellTest() {
        SummonerSpellSet testSummSpellSet = new SummonerSpellSet();
        testSummSpellSet.setSummonerSpellSetId(1);
        testSummSpellSet.setSummonerSpellSetName("Test");
        testSummSpellSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(100000);
        testSummSpellSet.setSummonerSpellIdList(testList);

        assertThrows(InvalidSummonerSpellException.class, () -> service.createNewSummonerSpellSet(testSummSpellSet));
    }

    @Test
    public void getAllSummonerSpellSetsGoldenPath() {
        template.update("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (\'Testing Summoner Spell Set\', \'1\')");
        template.update("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (\'Testing2 Summoner Spell Set\', \'1\')");

        List<SummonerSpellSet> toCheck = service.getAllSummonerSpellSets();

        assertEquals( 1, toCheck.get(0).getSummonerSpellSetId() );
        assertEquals( "Testing Summoner Spell Set", toCheck.get(0).getSummonerSpellSetName() );
        assertEquals( 1, toCheck.get(0).getChampionId());

        assertEquals( 2, toCheck.get(1).getSummonerSpellSetId() );
        assertEquals( "Testing2 Summoner Spell Set", toCheck.get(1).getSummonerSpellSetName() );
        assertEquals( 1, toCheck.get(1).getChampionId());

    }

    @Test
    public void getSummonerSpellSetByIdGoldenPath() {

        template.update("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (\'Testing Summoner Spell Set\', \'1\')");

        SummonerSpellSet summSpellSetToCheck = null;
        try {
            summSpellSetToCheck = service.getSummonerSpellSetById(1);
        }
        catch(NullIdException | InvalidSetException e) {
            fail();
        }

        assertEquals( 1, summSpellSetToCheck.getSummonerSpellSetId() );
        assertEquals( "Testing Summoner Spell Set", summSpellSetToCheck.getSummonerSpellSetName() );
        assertEquals( 1, summSpellSetToCheck.getChampionId());

    }

    @Test
    public void getSummonerSpellSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.getSummonerSpellSetById(null));
    }

    @Test
    public void getSummonerSpellSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.getSummonerSpellSetById(100000));
    }

    @Test
    public void updateSummonerSpellSetGoldenPathTest() {
        template.update("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (\'Testing Summoner Spell Set\', \'1\')");
        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

        SummonerSpellSet newUpdateSummonerSpellSet = new SummonerSpellSet();
        newUpdateSummonerSpellSet.setSummonerSpellSetId(1);
        newUpdateSummonerSpellSet.setSummonerSpellSetName("New Update");
        newUpdateSummonerSpellSet.setChampionId(2);

        try {
            service.updateSummonerSpellSet(newUpdateSummonerSpellSet);
        } catch (NullSetException | NullIdException | InvalidSetException e) {
            fail();
        }

        SummonerSpellSet toCheck = null;
        try {
            toCheck = service.getSummonerSpellSetById(1);
        } catch (NullIdException e) {
            e.printStackTrace();
        } catch (InvalidSetException e) {
            e.printStackTrace();
        }

        assertEquals( 1, toCheck.getSummonerSpellSetId() );
        assertEquals( "New Update", toCheck.getSummonerSpellSetName() );
        assertEquals( 2, toCheck.getChampionId());

    }

    @Test
    public void updateSummonerSpellSetNullRuneSetTest() {
        assertThrows(NullSetException.class, () -> service.updateSummonerSpellSet(null));
    }

    @Test
    public void updateSummonerSpellSetInvalidSummonerSpellSetTest() {
        SummonerSpellSet newUpdateSummSpellSet = new SummonerSpellSet();
        newUpdateSummSpellSet.setSummonerSpellSetId(100000);
        newUpdateSummSpellSet.setSummonerSpellSetName("New Update");
        newUpdateSummSpellSet.setChampionId(2);

        assertThrows(InvalidSetException.class, () -> service.updateSummonerSpellSet(newUpdateSummSpellSet));
    }

    @Test
    public void updateSummonerSpellSetNullIdTest() {
        SummonerSpellSet toCheck = new SummonerSpellSet();
        toCheck.setSummonerSpellSetId(null);
        toCheck.setSummonerSpellSetName("Test");
        toCheck.setChampionId(1);

        assertThrows(NullIdException.class, () -> service.updateSummonerSpellSet(toCheck));
    }

    @Test
    public void deleteSummonerSpellSetByIdGoldenPath() {
        template.update("insert into \"SummonerSpellSets\" (\"summSpellSetName\", \"championId\") values (\'Testing Summoner Spell Set\', \'1\')");

        try {
            service.deleteSummonerSpellSetById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        List<SummonerSpellSet> toCheck = service.getAllSummonerSpellSets();

        assertEquals(0, toCheck.size());
    }

    @Test
    public void deleteSummonerSpellSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> service.deleteSummonerSpellSetById(null));
    }

    @Test
    public void deleteSummonerSPellSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> service.deleteSummonerSpellSetById(100000));
    }


}
