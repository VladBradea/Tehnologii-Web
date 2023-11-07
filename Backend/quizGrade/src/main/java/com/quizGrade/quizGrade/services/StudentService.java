package com.quizGrade.quizGrade.services;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student createStudent(Student student) {
        studentRepository.save(student);
        return student;
    }
}
