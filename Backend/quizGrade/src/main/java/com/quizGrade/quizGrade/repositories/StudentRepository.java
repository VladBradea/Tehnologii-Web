package com.quizGrade.quizGrade.repositories;

import com.quizGrade.quizGrade.classes.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, String> {

}
