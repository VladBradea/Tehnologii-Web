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
    private String firstName;
    @Column
    private String lastName;
    @Column
    private boolean isTakingExam;

    /*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exam_id")
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @Nullable
    private Exam exam;
*/
    public Student(String email, String firstName, String lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isTakingExam = false;
        //this.exam = null;
    }

    public Student() {
        this.isTakingExam = false;
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
    public boolean getIsTakingExam() {
        return isTakingExam;
    }

    public void setTakingExam(boolean takingExam) {
        isTakingExam = takingExam;
    }
/*
    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

 */
    public String toString() {
        return "id " + this.id + "email " + this.email + "name " + this.lastName + "take exam " + this.isTakingExam;
    }
}
