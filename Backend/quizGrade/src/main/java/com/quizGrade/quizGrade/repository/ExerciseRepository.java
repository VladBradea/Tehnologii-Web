package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Exam;
import com.quizGrade.quizGrade.classes.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> findByExamId(Long examId);
}
