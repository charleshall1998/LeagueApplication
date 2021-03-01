package com.tp.LeagueApp.persistance;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.Rune;
import com.tp.LeagueApp.persistance.postgres.PostgresRuneDao;
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
public class PostgresRuneDaoTests {

    @Autowired
    PostgresRuneDao toTest;

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
    public void getAllRunesGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test2', 'Test2 Description')");

        List<Rune> toCheck = toTest.getAllRunes();

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
            toCheck = toTest.getRuneByName("Test");
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
        assertThrows(NullNameException.class, () -> toTest.getRuneByName(null));
    }

    @Test
    public void getRuneByIdGoldenPath() {
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");

        Rune toCheck = null;
        try {
            toCheck = toTest.getRuneById(1);
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
        assertThrows(NullIdException.class, () -> toTest.getRuneById(null));
    }

    @Test
    public void getRuneByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> toTest.getRuneById(100000));
    }
}
