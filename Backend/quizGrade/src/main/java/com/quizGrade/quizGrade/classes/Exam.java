package com.quizGrade.quizGrade.classes;

import jakarta.persistence.*;

@Table(name = "exams")
@Entity
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String course;

    public Exam(String course){
        this.course = course;
    }

    public Exam() {

    }
}
