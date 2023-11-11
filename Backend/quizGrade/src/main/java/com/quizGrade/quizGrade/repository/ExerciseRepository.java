package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
}
