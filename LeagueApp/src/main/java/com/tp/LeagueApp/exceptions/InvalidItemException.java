package com.tp.LeagueApp.exceptions;

public class InvalidItemException extends Throwable {
    public InvalidItemException(String msg) {
        super(msg);
    }
    public InvalidItemException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
