package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Grade;
import com.quizGrade.quizGrade.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    public Grade createGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    public Grade getGradeById(Long id) {
        Optional<Grade> optionalGrade = gradeRepository.findById(id);
        return optionalGrade.orElse(null);
    }

    public List<Grade> getGradesByExamId(Long examId) {
        return gradeRepository.findByExamId(examId);
    }

    public double getGradesAverageByExamId(Long examId) {
        List<Grade> listOfGrades = gradeRepository.findByExamId(examId);
        double sum = 0;
        for (Grade grade : listOfGrades) {
            sum += grade.getValue();
        }
        return sum / listOfGrades.size();
    }

    public List<Grade> getGradesByStudentId(Long studentId) {
        return gradeRepository.findByStudentId(studentId);
    }

    public Optional<Grade> getGradeByExamIdAndStudentId(Long examId, Long studentId) {
        return gradeRepository.findByStudentIdAndExamId(studentId, examId);
    }

    public Grade updateGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public Grade patchGrade(Grade grade) {
        Long gradeId = grade.getId();
        Optional<Grade> optionalExistingGrade = gradeRepository.findById(gradeId);

        if (optionalExistingGrade.isPresent()) {
            Grade existingGrade = optionalExistingGrade.get();

            if (grade.getValue() != 0) {
                existingGrade.setValue(grade.getValue());
            }

            if (grade.getExam().getId() != 0) {
                existingGrade.setExam(grade.getExam());
            }

            if (grade.getStudent().getId() != 0) {
                existingGrade.setStudent(grade.getStudent());
            }

            return gradeRepository.save(existingGrade);
        }

        return null; // Or throw an exception if the grade with the given ID is not found
    }

    public void deleteAllGrades() {
        gradeRepository.deleteAll();
    }

    public void deleteGradeById(Long id) {
        gradeRepository.deleteById(id);
    }

    public void deleteGradeByStudentId(Long studentId) {
        List<Grade> gradesToDelete = gradeRepository.findByStudentId(studentId);

        for (Grade grade : gradesToDelete) {
            gradeRepository.deleteById(grade.getId());
        }
    }
}
