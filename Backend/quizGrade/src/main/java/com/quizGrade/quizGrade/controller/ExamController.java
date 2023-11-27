package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Exam;
import com.quizGrade.quizGrade.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/exams/")
public class ExamController {
    @Autowired
    private ExamService examService;

    @PostMapping
    public ResponseEntity<?> createExam (@RequestBody Exam exam) {
        try {
            Exam createdExam = examService.createExam(exam);
            return new ResponseEntity<>(createdExam, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Exam>> getAllExams() {
        List<Exam> exams = examService.getAllExams();
        return new ResponseEntity<>(exams, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<?> getExamById (@PathVariable("id") long id) {
        try {
            Optional<Exam> exam = examService.getExamById(id);
            return new ResponseEntity<>(exam, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("id/{id}")
    public ResponseEntity<Exam> updateExam(@PathVariable("id") Long id, @RequestBody Exam exam) {
        exam.setId(id);
        Exam updateExam = examService.updateExam(exam);
        return new ResponseEntity<>(updateExam, HttpStatus.OK);
    }

    @PatchMapping("id/{id}")
    public ResponseEntity<Exam> patchExam(@PathVariable("id") Long id, @RequestBody Exam exam) {
        return examService.patchExam(exam, id)
                .map(patchedExam -> new ResponseEntity<>(patchedExam, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<HttpStatus> deleteExamById (@PathVariable("id") long id) {
        if (examService.deleteExamById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
