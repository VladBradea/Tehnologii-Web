package com.quizGrade.quizGrade.exceptions;

public class IncompleteStudentException extends RuntimeException{
    public IncompleteStudentException(String message){
        super(message);
    }
}
