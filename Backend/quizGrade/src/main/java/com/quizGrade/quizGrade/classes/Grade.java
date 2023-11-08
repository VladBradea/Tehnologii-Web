package com.quizGrade.quizGrade.classes;

import jakarta.persistence.*;

@Table(name = "grades")
@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private int value;

    public Grade(int value){
        this.value = value;
    }

    public Grade() {

    }
}
