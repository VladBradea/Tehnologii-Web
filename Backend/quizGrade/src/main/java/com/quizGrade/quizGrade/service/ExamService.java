package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Exam;
import com.quizGrade.quizGrade.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {
    @Autowired
    private ExamRepository examRepository;

    public Exam createExam(Exam exam) {
        examRepository.save(exam);
        return exam;
    }

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public Optional<Exam> getExamById (long id) {
        return examRepository.findById(id);
    }

    public Exam updateExam(Exam exam) {
        return examRepository.save(exam);
    }

    public Optional<Exam> patchExam(Exam  exam, Long id) {
        return examRepository.findById(id)
                .map(existingExam -> {
                    if (exam.getCourse() != null) {
                        existingExam.setCourse(exam.getCourse());
                    }
                    if (exam.getExamDate() != null) {
                        existingExam.setExamDate(exam.getExamDate());
                    }
                    if (exam.getTeacher() != null) {
                        existingExam.setTeacher(exam.getTeacher());
                    }
                    return examRepository.save(existingExam);
                });
    }

    public boolean deleteExamById (long id) {
        Optional<Exam> exam = examRepository.findById(id);
        if (exam.isPresent()) {
            examRepository.deleteById(exam.get().getId());
            return true;
        }
        return false;
    }
}
