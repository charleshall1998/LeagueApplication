package com.tp.LeagueApp.exceptions;

public class NullNameException extends Exception {
    public NullNameException(String msg) {
        super(msg);
    }

    public NullNameException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
