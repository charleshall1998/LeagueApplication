package com.tp.LeagueApp.exceptions;

public class EmptyRuneListException extends Throwable {
    public EmptyRuneListException(String msg) {
        super(msg);
    }
    public EmptyRuneListException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
