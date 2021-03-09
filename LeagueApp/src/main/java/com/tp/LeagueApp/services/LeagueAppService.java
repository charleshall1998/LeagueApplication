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

    public Champion getChampionByName(String championName) throws NullNameException {
        return championDao.getChampionByName(championName);
    }

    public Champion getChampionById(Integer championId) throws NullIdException, InvalidSetException {
        return championDao.getChampionById(championId);
    }

    //Items
    public List<Item> getAllItems() {
        return itemDao.getAllItems();
    }

    public Item getItemByName(String itemName) throws NullNameException {
        return itemDao.getItemByName(itemName);
    }

    public Item getItemById(Integer itemId) throws NullIdException, InvalidSetException {
        return itemDao.getItemById(itemId);
    }

    //Runes
    public List<Rune> getAllRunes() {
        return runeDao.getAllRunes();
    }

    public Rune getRuneByName(String runeName) throws NullNameException {
        return runeDao.getRuneByName(runeName);
    }

    public Rune getRuneById(Integer runeId) throws NullIdException, InvalidSetException {
        return runeDao.getRuneById(runeId);
    }

    //Summoner Spells
    public List<SummonerSpell> getAllSummonerSpells() {
        return summonerSpellDao.getAllSummonerSpells();
    }

    public SummonerSpell getSummonerSpellByName(String summonerSpellName) throws NullNameException {
        return summonerSpellDao.getSummonerSpellByName(summonerSpellName);
    }

    public SummonerSpell getSummonerSpellById(Integer summonerSpellId) throws NullIdException, InvalidSetException {
        return summonerSpellDao.getSummonerSpellById(summonerSpellId);
    }

    //Various Sets methods
    //Item Sets
    public ItemSet createNewItemSet(ItemSet toAdd) throws NullSetException, InvalidItemException, EmptyItemListException, DuplicateComponentException {
        return itemSetDao.createNewItemSet(toAdd);
    }

    public List<ItemSet> getAllItemSets() {
        return itemSetDao.getAllItemSets();
    }

    public ItemSet getItemSetById(Integer itemSetId) throws NullIdException, InvalidSetException {
        return itemSetDao.getItemSetById(itemSetId);
    }

    public void updateItemSet(ItemSet toUpdate) throws NullSetException, NullIdException, InvalidSetException {
        itemSetDao.updateItemSet(toUpdate);
    }

    public void deleteItemSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        itemSetDao.deleteItemSetById(toDeleteId);
    }

    //Rune Sets
    public RuneSet createNewRuneSet(RuneSet toAdd) throws NullSetException, EmptyRuneListException, InvalidRuneException, DuplicateComponentException {
        return runeSetDao.createNewRuneSet(toAdd);
    }

    public List<RuneSet> getAllRuneSets() {
        return runeSetDao.getAllRuneSets();
    }

    public RuneSet getRuneSetById(Integer runeSetId) throws NullIdException, InvalidSetException {
        return runeSetDao.getRuneSetById(runeSetId);
    }

    public void updateRuneSet(RuneSet toUpdate) throws NullSetException, NullIdException, InvalidSetException {
        runeSetDao.updateRuneSet(toUpdate);
    }

    public void deleteRuneSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        runeSetDao.deleteRuneSetById(toDeleteId);
    }

    //Summoner Spell Sets
    public SummonerSpellSet createNewSummonerSpellSet(SummonerSpellSet toAdd) throws NullSetException, InvalidSummonerSpellException, EmptySummonerSpellListException, DuplicateComponentException {
        return summonerSpellSetDao.createNewSummonerSpellSet(toAdd);
    }

    public List<SummonerSpellSet> getAllSummonerSpellSets() {
        return summonerSpellSetDao.getAllSummonerSpellSets();
    }

    public SummonerSpellSet getSummonerSpellSetById(Integer summonerSpellSetId) throws NullIdException, InvalidSetException {
        return summonerSpellSetDao.getSummonerSpellSetById(summonerSpellSetId);
    }

    public void updateSummonerSpellSet(SummonerSpellSet toUpdate) throws NullSetException, NullIdException, InvalidSetException {
        summonerSpellSetDao.updateSummonerSpellSet(toUpdate);
    }

    public void deleteSummonerSpellSetById(Integer toDeleteId) throws NullIdException, InvalidSetException {
        summonerSpellSetDao.deleteSummonerSpellSetById(toDeleteId);
    }

}
