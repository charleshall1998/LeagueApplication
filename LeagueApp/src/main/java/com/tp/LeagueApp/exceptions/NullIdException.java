package com.tp.LeagueApp.exceptions;

public class NullIdException extends Exception {
    public NullIdException(String msg) {
        super(msg);
    }
    public NullIdException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
