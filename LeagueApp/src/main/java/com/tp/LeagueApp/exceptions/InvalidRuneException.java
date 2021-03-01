package com.tp.LeagueApp.exceptions;

public class InvalidRuneException extends Exception {
    public InvalidRuneException(String msg) {
        super(msg);
    }
    public InvalidRuneException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
