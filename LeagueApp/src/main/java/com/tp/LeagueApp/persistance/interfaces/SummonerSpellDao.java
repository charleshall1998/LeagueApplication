package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.SummonerSpell;

import java.util.List;

public interface SummonerSpellDao {

    //READ
    List<SummonerSpell> getAllSummonerSpells();
    SummonerSpell getSummonerSpellByName(String summonerSpellName) throws NullNameException;
    SummonerSpell getSummonerSpellById(Integer summonerSpellId) throws NullIdException, InvalidSetException;
}
