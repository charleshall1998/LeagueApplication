package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.SummonerSpell;

import java.util.List;

public interface SummonerSpellDao {

    //READ
    List<SummonerSpell> getAllSummonerSpells();
    SummonerSpell getSummonerSpellByName(String summonerSpellName) throws NullNameException, EmptyStringException, InvalidSummonerSpellException;
    SummonerSpell getSummonerSpellById(Integer summonerSpellId) throws NullIdException, InvalidSummonerSpellException;
}
