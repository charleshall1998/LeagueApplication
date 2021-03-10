package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.SummonerSpellSet;

import java.util.List;

public interface SummonerSpellSetDao {

    //CREATE
    SummonerSpellSet createNewSummonerSpellSet(SummonerSpellSet toAdd) throws NullSetException, EmptySummonerSpellListException,
            InvalidSummonerSpellException, DuplicateComponentException, MaxNameLengthException, EmptyStringException;

    //READ
    List<SummonerSpellSet> getAllSummonerSpellSets();
    SummonerSpellSet getSummonerSpellSetById(Integer summonerSpellSetId) throws NullIdException, InvalidSetException;

    //UPDATE
    void updateSummonerSpellSet(SummonerSpellSet toUpdate) throws NullSetException, NullIdException, InvalidSetException, DuplicateComponentException, EmptyStringException, MaxNameLengthException;

    //DELETE
    void deleteSummonerSpellSetById(Integer toDeleteId) throws NullIdException, InvalidSetException;
}
