package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.RuneSet;

import java.util.List;

public interface RuneSetDao {

    //CREATE
    RuneSet createNewRuneSet(RuneSet toAdd) throws NullSetException, EmptyRuneListException
            , InvalidRuneException, DuplicateComponentException, MaxNameLengthException, EmptyStringException;

    //READ
    List<RuneSet> getAllRuneSets();
    RuneSet getRuneSetById(Integer runeSetId) throws NullIdException, InvalidSetException;

    //UPDATE
    void updateRuneSet(RuneSet toUpdate) throws NullSetException, NullIdException, InvalidSetException, DuplicateComponentException, EmptyStringException, MaxNameLengthException;

    //CREATE
    void deleteRuneSetById(Integer toDeleteId) throws NullIdException, InvalidSetException;
}
