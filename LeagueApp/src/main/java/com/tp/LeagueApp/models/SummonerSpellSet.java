package com.tp.LeagueApp.models;

import java.util.List;

public class SummonerSpellSet {
    Integer summonerSpellSetId;
    String summonerSpellSetName;
    Integer championId;
    List<Integer> summonerSpellIdList;

    public Integer getSummonerSpellSetId() {
        return summonerSpellSetId;
    }

    public void setSummonerSpellSetId(Integer summonerSpellSetId) {
        this.summonerSpellSetId = summonerSpellSetId;
    }

    public String getSummonerSpellSetName() {
        return summonerSpellSetName;
    }

    public void setSummonerSpellSetName(String summonerSpellSetName) {
        this.summonerSpellSetName = summonerSpellSetName;
    }

    public Integer getChampionId() {
        return championId;
    }

    public void setChampionId(Integer championId) {
        this.championId = championId;
    }

    public List<Integer> getSummonerSpellIdList() {
        return summonerSpellIdList;
    }

    public void setSummonerSpellIdList(List<Integer> summonerSpellIdList) {
        this.summonerSpellIdList = summonerSpellIdList;
    }
}
