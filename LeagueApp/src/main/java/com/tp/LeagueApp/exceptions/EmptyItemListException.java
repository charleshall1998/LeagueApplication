package com.tp.LeagueApp.exceptions;

public class EmptyItemListException extends Throwable {
    public EmptyItemListException(String msg) {
        super(msg);
    }
    public EmptyItemListException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
