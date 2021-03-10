package com.tp.LeagueApp.persistance;
import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.Item;
import com.tp.LeagueApp.persistance.postgres.PostgresItemDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("daoTesting")
public class PostgresItemDaoTests {

    @Autowired
    PostgresItemDao toTest;

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

    @Test
    public void getAllItemsGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test2', 'Test2 Description', '2000')");

        List<Item> toCheck = toTest.getAllItems();

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
            toCheck = toTest.getItemByName("Test");
        }
        catch(NullNameException | EmptyStringException | InvalidItemException e) {
            fail();
        }

        assertEquals(1, toCheck.getItemId());
        assertEquals("Test", toCheck.getItemName());
        assertEquals("Test Description", toCheck.getItemDescription());
        assertEquals(1000, toCheck.getItemCost());

    }

    @Test
    public void getItemByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> toTest.getItemByName(null));
    }

    @Test
    public void getItemByNameEmptyNameTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getItemByName(""));
    }

    @Test
    public void getItemByNameEmptyNameSpaceTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getItemByName(" "));
    }

    @Test
    public void getItemByNameEmptyNameMultipleSpacesTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getItemByName("            "));
    }

    @Test
    public void getItemByNameInvalidNameTest() {
        assertThrows(InvalidItemException.class, () -> toTest.getItemByName("ASDFGH"));
    }

    @Test
    public void getItemByIdGoldenPath() {
        template.update("insert into \"Items\" (\"itemName\", \"itemDescription\", \"itemCost\") values ('Test', 'Test Description', '1000')");

        Item toCheck = null;
        try {
            toCheck = toTest.getItemById(1);
        }
        catch(NullIdException | InvalidItemException e) {
            fail();
        }

        assertEquals(1, toCheck.getItemId());
        assertEquals("Test", toCheck.getItemName());
        assertEquals("Test Description", toCheck.getItemDescription());
        assertEquals(1000, toCheck.getItemCost());

    }

    @Test
    public void getItemByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> toTest.getItemById(null));
    }

    @Test
    public void getItemByIdInvalidItemTest() {
        assertThrows(InvalidItemException.class, () -> toTest.getItemById(100000));
    }
}
