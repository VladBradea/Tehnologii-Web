package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.repository.StudentRepository;
import jakarta.transaction.Transactional;
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
