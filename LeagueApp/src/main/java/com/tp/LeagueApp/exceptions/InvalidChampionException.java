package com.tp.LeagueApp.exceptions;

public class InvalidChampionException extends Exception{
    public InvalidChampionException(String msg) {
    super(msg);
}
    public InvalidChampionException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
