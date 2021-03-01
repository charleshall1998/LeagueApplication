package com.tp.LeagueApp.exceptions;

public class InvalidSummonerSpellException extends Throwable {
    public InvalidSummonerSpellException(String msg) {
        super(msg);
    }
    public InvalidSummonerSpellException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
