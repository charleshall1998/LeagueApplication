package com.tp.LeagueApp.persistance;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.SummonerSpell;
import com.tp.LeagueApp.persistance.postgres.PostgresSummonerSpellDao;
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
public class PostgresSummonerSpellDaoTests {

    @Autowired
    PostgresSummonerSpellDao toTest;

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
    public void getAllSummonerSpellsGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test2', 'Test2 Description')");

        List<SummonerSpell> toCheck = toTest.getAllSummonerSpells();

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
            toCheck = toTest.getSummonerSpellByName("Test");
        }
        catch(NullNameException | EmptyStringException | InvalidSummonerSpellException e) {
            fail();
        }

        assertEquals(1, toCheck.getSummonerSpellId());
        assertEquals("Test", toCheck.getSummonerSpellName());
        assertEquals("Test Description", toCheck.getSummonerSpellDescription());

    }

    @Test
    public void getSummonerSpellByNameNullNameTest() {
        assertThrows(NullNameException.class, () -> toTest.getSummonerSpellByName(null));
    }

    @Test
    public void getSummonerSpellByNameEmptyNameTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getSummonerSpellByName(""));
    }

    @Test
    public void getSummonerSpellByNameEmptyNameSpaceTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getSummonerSpellByName(" "));
    }

    @Test
    public void getSummonerSpellByNameEmptyNameMultipleSpacesTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getSummonerSpellByName("            "));
    }

    @Test
    public void getSummonerSpellByNameInvalidNameTest() {
        assertThrows(InvalidSummonerSpellException.class, () -> toTest.getSummonerSpellByName("ASDFGH"));
    }

    @Test
    public void getSummonerSpellByIdGoldenPath() {
        template.update("insert into \"SummonerSpells\" (\"summSpellName\", \"summSpellDescription\") values ('Test', 'Test Description')");

        SummonerSpell toCheck = null;
        try {
            toCheck = toTest.getSummonerSpellById(1);
        }
        catch(NullIdException | InvalidSummonerSpellException e) {
            fail();
        }

        assertEquals(1, toCheck.getSummonerSpellId());
        assertEquals("Test", toCheck.getSummonerSpellName());
        assertEquals("Test Description", toCheck.getSummonerSpellDescription());

    }

    @Test
    public void getSummonerSpellByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> toTest.getSummonerSpellById(null));
    }

    @Test
    public void getSummonerSpellSetByIdInvalidSummonerSpellTest() {
        assertThrows(InvalidSummonerSpellException.class, () -> toTest.getSummonerSpellById(100000));
    }

}
