package com.tp.LeagueApp.exceptions;

public class InvalidSetException extends Exception {
    public InvalidSetException(String msg) {
        super(msg);
    }
    public InvalidSetException(String msg, Throwable innerException) {
        super(msg, innerException);
    }
}
