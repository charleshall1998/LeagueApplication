package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.Champion;

import java.util.List;

public interface ChampionDao {

    //READ
    List<Champion> getAllChampions();
    Champion getChampionByName(String championName) throws NullNameException;
    Champion getChampionById(Integer championId) throws NullIdException, InvalidSetException;
}
