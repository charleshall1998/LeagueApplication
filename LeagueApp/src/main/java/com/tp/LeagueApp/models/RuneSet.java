package com.tp.LeagueApp.models;

import java.util.List;

public class RuneSet {

    Integer runeSetId;
    String runeSetName;
    Integer championId;
    List<Integer> runeIdList;

    public Integer getRuneSetId() {
        return runeSetId;
    }

    public void setRuneSetId(Integer runeSetId) {
        this.runeSetId = runeSetId;
    }

    public String getRuneSetName() {
        return runeSetName;
    }

    public void setRuneSetName(String runeSetName) {
        this.runeSetName = runeSetName;
    }

    public Integer getChampionId() {
        return championId;
    }

    public void setChampionId(Integer championId) {
        this.championId = championId;
    }

    public List<Integer> getRuneIdList() {
        return runeIdList;
    }

    public void setRuneIdList(List<Integer> runeIdList) {
        this.runeIdList = runeIdList;
    }
}
