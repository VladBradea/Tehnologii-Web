package com.quizGrade.quizGrade.classes;

import javax.persistence.*;

@Entity
@Table(name =  "exercises")
public class Exercise {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String text;
    @Column
    private String option1;
    @Column
    private String option2;
    @Column
    private String option3;
    @Column
    private String option4;
    @Column
    private String answer;

}
