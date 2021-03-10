package com.tp.LeagueApp.exceptions;

public class MaxNameLengthException extends Exception{
    public MaxNameLengthException(String msg) {
        super(msg);
    }
    public MaxNameLengthException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
