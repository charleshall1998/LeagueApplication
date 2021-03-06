package com.tp.LeagueApp.services;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.*;
import com.tp.LeagueApp.persistance.interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeagueAppService {

    @Autowired
    ChampionDao championDao;

    @Autowired
    ItemDao itemDao;

    @Autowired
    RuneDao runeDao;

    @Autowired
    SummonerSpellDao summonerSpellDao;

    @Autowired
    ItemSetDao itemSetDao;

    @Autowired
    RuneSetDao runeSetDao;

    @Autowired
    SummonerSpellSetDao summonerSpellSetDao;


    //TODO Write checks in service layer (Empty string, invalid names/id's etc.)
    //Base component methods
    //Champions
    public List<Champion> getAllChampions() {
        return championDao.getAllChampions();
    }

    public Champion getChampionByName(String championName) throws NullNameException, EmptyStringException, InvalidChampionException {
        return championDao.getChampionByName(championName);
    }

    public Champion getChampionById(Integer championId) throws NullIdException, InvalidChampionException {
        return championDao.getChampionById(championId);
    }

    //Items
    public List<Item> getAllItems() {
        return itemDao.getAllItems();
    }

    public Item getItemByName(String itemName) throws NullNameException, EmptyStringException, InvalidItemException {
        return itemDao.getItemByName(itemName);
    }

    public Item getItemById(Integer itemId) throws NullIdException, InvalidItemException {
        return itemDao.getItemById(itemId);
    }

    //Runes
    public List<Rune> getAllRunes() {
        return runeDao.getAllRunes();
    }

    public Rune getRuneByName(String runeName) throws NullNameException, EmptyStringException, InvalidRuneException {
        return runeDao.getRuneByName(runeName);
    }

    public Rune getRuneById(Integer runeId) throws NullIdException, InvalidRuneException {
        return runeDao.getRuneById(runeId);
    }

    //Summoner Spells
    public List<SummonerSpell> getAllSummonerSpells() {
        return summonerSpellDao.getAllSummonerSpells();
    }

    public SummonerSpell getSummonerSpellByName(String summonerSpellName) throws NullNameException, EmptyStringException, InvalidSummonerSpellException {
        return summonerSpellDao.getSummonerSpellByName(summonerSpellName);
    }

    public SummonerSpell getSummonerSpellById(Integer summonerSpellId) throws NullIdException, InvalidSummonerSpellException {
        return summonerSpellDao.getSummonerSpellById(summonerSpellId);
    }

    //Item Sets
    public ItemSet createNewItemSet(ItemSet toAdd) throws NullSetException, InvalidItemException, EmptyItemListException,
            DuplicateComponentException, MaxNameLengthException, EmptyStringException {
        return itemSetDao.createNewItemSet(toAdd);
    }

    public List<ItemSet> getAllItemSets() {
        return itemSetDao.getAllItemSets();
    }

    public ItemSet getItemSetById(Integer itemSetId) throws NullIdException, InvalidSetException {
        return itemSetDao.getItemSetById(itemSetId);
    }

    public void updateItemSet(ItemSet toUpdate) throws NullSetException, NullIdException, InvalidSetException, DuplicateComponentException, EmptyStringException, MaxNameLengthException {
        itemSetDao.updateItemSet(toUpdate);
    }

    public void deleteItemSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        itemSetDao.deleteItemSetById(toDeleteId);
    }

    //Rune Sets
    public RuneSet createNewRuneSet(RuneSet toAdd) throws NullSetException, EmptyRuneListException,
            InvalidRuneException, DuplicateComponentException, MaxNameLengthException, EmptyStringException {
        return runeSetDao.createNewRuneSet(toAdd);
    }

    public List<RuneSet> getAllRuneSets() {
        return runeSetDao.getAllRuneSets();
    }

    public RuneSet getRuneSetById(Integer runeSetId) throws NullIdException, InvalidSetException {
        return runeSetDao.getRuneSetById(runeSetId);
    }

    public void updateRuneSet(RuneSet toUpdate) throws NullSetException, NullIdException, InvalidSetException,
            DuplicateComponentException, EmptyStringException, MaxNameLengthException {
        runeSetDao.updateRuneSet(toUpdate);
    }

    public void deleteRuneSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        runeSetDao.deleteRuneSetById(toDeleteId);
    }

    //Summoner Spell Sets
    public SummonerSpellSet createNewSummonerSpellSet(SummonerSpellSet toAdd) throws NullSetException, InvalidSummonerSpellException, EmptySummonerSpellListException, DuplicateComponentException, MaxNameLengthException, EmptyStringException {
        return summonerSpellSetDao.createNewSummonerSpellSet(toAdd);
    }

    public List<SummonerSpellSet> getAllSummonerSpellSets() {
        return summonerSpellSetDao.getAllSummonerSpellSets();
    }

    public SummonerSpellSet getSummonerSpellSetById(Integer summonerSpellSetId) throws NullIdException, InvalidSetException {
        return summonerSpellSetDao.getSummonerSpellSetById(summonerSpellSetId);
    }

    public void updateSummonerSpellSet(SummonerSpellSet toUpdate) throws NullSetException, NullIdException,
            InvalidSetException, DuplicateComponentException, EmptyStringException, MaxNameLengthException {
        summonerSpellSetDao.updateSummonerSpellSet(toUpdate);
    }

    public void deleteSummonerSpellSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        summonerSpellSetDao.deleteSummonerSpellSetById(toDeleteId);
    }


}
