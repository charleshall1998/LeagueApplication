package com.tp.LeagueApp.persistance;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.RuneSet;
import com.tp.LeagueApp.persistance.postgres.PostgresRuneSetDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("daoTesting")
public class PostgresRuneSetDaoTests {

    @Autowired
    PostgresRuneSetDao toTest;

    @Autowired
    JdbcTemplate template;

    @BeforeEach
    public void setup(){

        //need to clear all tables and reset all sequences

        template.update("truncate \"ItemSetItems\", \"RuneSetRunes\", \"SummonerSpellSetSummonerSpells\", \"ItemSets\", \"Items\",\n" +
                "\"RuneSets\", \"Runes\", \"SummonerSpellSets\", \"SummonerSpells\", \"Champions\" RESTART IDENTITY;");

        template.update("insert into \"Champions\" (\"championName\", \"championDescription\",\"winRate\",\"pickRate\",\"banRate\",\"avgKDA\")\n" +
                "values ('Test','Test Description', '1','1','1','1')");

        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test', 'Test Description')");
        template.update("insert into \"Runes\" (\"runeName\", \"runeDescription\") values ('Test1', 'Test Description')");

    }

    @Test
    public void createNewRuneSetGoldenPath() {
        RuneSet runeSetToAdd = new RuneSet();
        runeSetToAdd.setRuneSetName("Testing Rune Set");
        runeSetToAdd.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        testList.add(2);
        runeSetToAdd.setRuneIdList(testList);

        RuneSet returnedRuneSet = null;
        try {
            returnedRuneSet = toTest.createNewRuneSet(runeSetToAdd);
        } catch (NullSetException | InvalidRuneException | EmptyRuneListException | DuplicateComponentException e) {
            fail();
        }

        assertEquals( 1, returnedRuneSet.getRuneSetId() );
        assertEquals( "Testing Rune Set", returnedRuneSet.getRuneSetName() );
        assertEquals( 1, returnedRuneSet.getChampionId());

        List<RuneSet> allRuneSets = toTest.getAllRuneSets();

        assertEquals( 1, allRuneSets.get(0).getRuneSetId() );
        assertEquals( "Testing Rune Set", allRuneSets.get(0).getRuneSetName() );
        assertEquals( 1, allRuneSets.get(0).getChampionId());
    }

    @Test
    public void createNewRuneSetNullRuneSetTest() {
        assertThrows(NullSetException.class, () -> toTest.createNewRuneSet(null));
    }

    @Test
    public void createNewRuneSetEmptyRuneIdListTest() {
        RuneSet testRuneSet = new RuneSet();
        testRuneSet.setRuneSetId(1);
        testRuneSet.setRuneSetName("Test");
        testRuneSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testRuneSet.setRuneIdList(testList);

        assertThrows(EmptyRuneListException.class, () -> toTest.createNewRuneSet(testRuneSet));
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

        assertThrows(InvalidRuneException.class, () -> toTest.createNewRuneSet(testRuneSet));
    }

    @Test
    public void createNewRuneSetDuplicateComponentTest() {
        RuneSet testRuneSet = new RuneSet();
        testRuneSet.setRuneSetId(1);
        testRuneSet.setRuneSetName("Test");
        testRuneSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        testList.add(2);
        testList.add(2);
        testRuneSet.setRuneIdList(testList);

        assertThrows(DuplicateComponentException.class, () -> toTest.createNewRuneSet(testRuneSet));
    }

    @Test
    public void getAllRuneSetsGoldenPath() {
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing2 Rune Set\', \'1\')");

        List<RuneSet> toCheck = toTest.getAllRuneSets();

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
            runeSetToCheck = toTest.getRuneSetById(1);
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
        assertThrows(NullIdException.class, () -> toTest.getRuneSetById(null));
    }

    @Test
    public void getRuneSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> toTest.getRuneSetById(100000));
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
        List<Integer> updateRuneList = new ArrayList<>();
        updateRuneList.add(1);
        newUpdateRuneSet.setRuneIdList(updateRuneList);

        try {
            toTest.updateRuneSet(newUpdateRuneSet);
        } catch (NullSetException | NullIdException | InvalidSetException | DuplicateComponentException e) {
            fail();
        }

        RuneSet toCheck = null;
        try {
            toCheck = toTest.getRuneSetById(1);
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
        assertThrows(NullSetException.class, () -> toTest.updateRuneSet(null));
    }

    @Test
    public void updateRuneSetInvalidRuneSetTest() {
        RuneSet newUpdateRuneSet = new RuneSet();
        newUpdateRuneSet.setRuneSetId(100000);
        newUpdateRuneSet.setRuneSetName("New Update");
        newUpdateRuneSet.setChampionId(2);
        List<Integer> updateRuneList = new ArrayList<>();
        updateRuneList.add(1);
        newUpdateRuneSet.setRuneIdList(updateRuneList);

        assertThrows(InvalidSetException.class, () -> toTest.updateRuneSet(newUpdateRuneSet));
    }

    @Test
    public void updateRuneSetNullIdTest() {
        RuneSet toCheck = new RuneSet();
        toCheck.setRuneSetId(null);
        toCheck.setRuneSetName("Test");
        toCheck.setChampionId(1);
        List<Integer> updateRuneList = new ArrayList<>();
        updateRuneList.add(1);
        toCheck.setRuneIdList(updateRuneList);

        assertThrows(NullIdException.class, () -> toTest.updateRuneSet(toCheck));
    }

    @Test
    public void updateRuneSetDuplicateComponentTest() {
        RuneSet testRuneSet = new RuneSet();
        testRuneSet.setRuneSetId(1);
        testRuneSet.setRuneSetName("Test");
        testRuneSet.setChampionId(1);
        List<Integer> testList = new ArrayList<>();
        testList.add(1);
        testList.add(2);
        testList.add(2);
        testRuneSet.setRuneIdList(testList);

        assertThrows(DuplicateComponentException.class, () -> toTest.createNewRuneSet(testRuneSet));
    }

    @Test
    public void deleteRuneSetByIdGoldenPath() {
        template.update("insert into \"RuneSets\" (\"runeSetName\", \"championId\") values (\'Testing Rune Set\', \'1\')");

        try {
            toTest.deleteRuneSetById(1);
        } catch (NullIdException | InvalidSetException e) {
            fail();
        }

        List<RuneSet> toCheck = toTest.getAllRuneSets();

        assertEquals(0, toCheck.size());
    }

    @Test
    public void deleteRuneSetByIdNullIdTest() {
        assertThrows(NullIdException.class, () -> toTest.deleteRuneSetById(null));
    }

    @Test
    public void deleteRuneSetByIdInvalidSetTest() {
        assertThrows(InvalidSetException.class, () -> toTest.deleteRuneSetById(100000));
    }
}
