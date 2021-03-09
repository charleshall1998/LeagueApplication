package com.tp.LeagueApp.exceptions;

public class DuplicateComponentException extends Exception {
    public DuplicateComponentException(String msg) {
        super(msg);
    }
    public DuplicateComponentException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
