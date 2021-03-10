package com.tp.LeagueApp.exceptions;

public class EmptyStringException extends Exception{
    public EmptyStringException(String msg) {
        super(msg);
    }
    public EmptyStringException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
