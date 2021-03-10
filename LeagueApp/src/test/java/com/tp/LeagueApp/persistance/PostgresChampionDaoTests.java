package com.tp.LeagueApp.persistance;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.Champion;
import com.tp.LeagueApp.persistance.postgres.PostgresChampionDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("daoTesting")
public class PostgresChampionDaoTests {

    @Autowired
    PostgresChampionDao toTest;

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
    public void getAllChampionsGoldenPath() {
        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test2','Test2 Description', '2','2','2','2')");

        List<Champion> toCheck = toTest.getAllChampions();

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
            toCheck = toTest.getChampionByName("Test");
        } catch (NullNameException | InvalidChampionException | EmptyStringException e) {
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
        assertThrows(NullNameException.class, () -> toTest.getChampionByName(null));
    }

    @Test
    public void getChampionByNameEmptyNameTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getChampionByName(""));
    }

    @Test
    public void getChampionByNameEmptyNameSpaceTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getChampionByName(" "));
    }

    @Test
    public void getChampionByNameEmptyNameMultipleSpacesTest() {
        assertThrows(EmptyStringException.class, () -> toTest.getChampionByName("            "));
    }

    @Test
    public void getChampionByNameInvalidNameTest() {
        assertThrows(InvalidChampionException.class, () -> toTest.getChampionByName("ASDFGH"));
    }

    @Test
    public void getChampionByIdGoldenPath() {

        Champion toCheck = null;
        try {
            toCheck = toTest.getChampionById(1);
        } catch (NullIdException | InvalidChampionException e) {
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
        assertThrows(NullIdException.class, () -> toTest.getChampionById(null));
    }

    @Test
    public void getChampionByIdInvalidChampionTest() {
        assertThrows(InvalidChampionException.class, () -> toTest.getChampionById(100000));
    }

}
