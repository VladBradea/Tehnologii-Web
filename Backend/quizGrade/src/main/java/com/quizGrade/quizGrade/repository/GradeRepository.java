package com.quizGrade.quizGrade.repository;

import com.quizGrade.quizGrade.classes.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GradeRepository extends JpaRepository<Grade, Long> {
    List<Grade> findByExamId (Long examId);
    List<Grade> findByStudentId(Long studentId);
    Optional<Grade> findByStudentIdAndExamId(Long studentId, Long examId);
}
