package com.tp.LeagueApp.models;

import java.math.BigDecimal;

public class Champion {

    Integer championId;
    String championName, championDescription;
    BigDecimal winRate, pickRate, banRate, avgKDA;

    public Integer getChampionId() {
        return championId;
    }

    public void setChampionId(Integer championId) {
        this.championId = championId;
    }

    public String getChampionName() {
        return championName;
    }

    public void setChampionName(String championName) {
        this.championName = championName;
    }

    public String getChampionDescription() {
        return championDescription;
    }

    public void setChampionDescription(String championDescription) {
        this.championDescription = championDescription;
    }

    public BigDecimal getWinRate() {
        return winRate;
    }

    public void setWinRate(BigDecimal winRate) {
        this.winRate = winRate;
    }

    public BigDecimal getPickRate() {
        return pickRate;
    }

    public void setPickRate(BigDecimal pickRate) {
        this.pickRate = pickRate;
    }

    public BigDecimal getBanRate() {
        return banRate;
    }

    public void setBanRate(BigDecimal banRate) {
        this.banRate = banRate;
    }

    public BigDecimal getAvgKDA() {
        return avgKDA;
    }

    public void setAvgKDA(BigDecimal avgKDA) {
        this.avgKDA = avgKDA;
    }
}
