package com.tp.LeagueApp.persistance.interfaces;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.Champion;

import java.util.List;

public interface ChampionDao {

    //READ
    List<Champion> getAllChampions();
    Champion getChampionByName(String championName) throws NullNameException, InvalidChampionException, EmptyStringException;
    Champion getChampionById(Integer championId) throws NullIdException, InvalidChampionException;
}
