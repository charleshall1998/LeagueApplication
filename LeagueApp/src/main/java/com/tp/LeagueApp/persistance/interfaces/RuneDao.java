package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.Rune;

import java.util.List;

public interface RuneDao {

    //READ
    List<Rune> getAllRunes();
    Rune getRuneByName(String runeName) throws NullNameException, EmptyStringException, InvalidRuneException;
    Rune getRuneById(Integer runeId) throws NullIdException, InvalidRuneException;

}
