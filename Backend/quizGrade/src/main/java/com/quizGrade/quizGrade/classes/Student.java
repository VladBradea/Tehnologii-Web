package com.quizGrade.quizGrade.classes;

import jakarta.persistence.*;

@Table(name = "students")
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String firstName;
    @Column
    private String lastName;
    //@Column
    //private boolean isTakingExam;

    public Student(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        //this.isTakingExam = false;
        //this.exam = null;
    }

    public Student() {
        //this.isTakingExam = false;
        //this.exam = null;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    /*
    public boolean getIsTakingExam() {
        return isTakingExam;
    }

    public void setTakingExam(boolean takingExam) {
        isTakingExam = takingExam;
    }*/
}
