package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByExamId(Long examId);
}
