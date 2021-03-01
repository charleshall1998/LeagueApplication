package com.tp.LeagueApp.exceptions;

public class NullSetException extends Exception {
    public NullSetException(String msg) {
        super(msg);
    }

    public NullSetException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
