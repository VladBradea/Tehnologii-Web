package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
