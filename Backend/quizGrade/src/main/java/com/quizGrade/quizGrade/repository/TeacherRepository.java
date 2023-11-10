package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
