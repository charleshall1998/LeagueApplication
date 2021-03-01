package com.tp.LeagueApp.exceptions;

public class EmptySummonerSpellListException extends Throwable {
    public EmptySummonerSpellListException(String msg) {
        super(msg);
    }
    public EmptySummonerSpellListException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
