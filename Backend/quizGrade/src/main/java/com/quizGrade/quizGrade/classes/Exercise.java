package com.quizGrade.quizGrade.classes;

import jakarta.persistence.*;

@Table(name = "exercises")
@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    public Exercise(String text, String option1,String option2,String option3,String option4){
        this.text = text;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }

    public Exercise() {

    }
}
