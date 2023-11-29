package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Grade;
import com.quizGrade.quizGrade.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/grades/")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @PostMapping
    public ResponseEntity<Grade> createGrade(@RequestBody Grade grade) {
        Grade createdGrade = gradeService.createGrade(grade);
        return new ResponseEntity<>(createdGrade, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Grade>> getAllGrades() {
        List<Grade> grades = gradeService.getAllGrades();
        return new ResponseEntity<>(grades, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable Long id) {
        Grade grade = gradeService.getGradeById(id);
        return new ResponseEntity<>(grade, HttpStatus.OK);
    }

    @GetMapping("examId/{examId}")
    public ResponseEntity<List<Grade>> getGradesByExamId(@PathVariable Long examId) {
        List<Grade> grades = gradeService.getGradesByExamId(examId);
        return new ResponseEntity<>(grades, HttpStatus.OK);
    }

    @GetMapping("average/examId/{examId}")
    public ResponseEntity<?> getGradesAverageByExamId(@PathVariable Long examId) {
        return new ResponseEntity(gradeService.getGradesAverageByExamId(examId), HttpStatus.OK);
    }

    @GetMapping("studentId/{studentId}")
    public ResponseEntity<List<Grade>> getGradesByStudentId(@PathVariable Long studentId) {
        List<Grade> grades = gradeService.getGradesByStudentId(studentId);
        return new ResponseEntity<>(grades, HttpStatus.OK);
    }

    @GetMapping("examId/{examId}/studentId/{studentId}")
    public ResponseEntity<Grade> getGradeByExamAndStudentId(@PathVariable Long examId, @PathVariable Long studentId) {
        Optional<Grade> grade = gradeService.getGradeByExamIdAndStudentId(examId, studentId);
        return grade.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PutMapping("id/{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable Long id, @RequestBody Grade grade) {
        grade.setId(id);
        Grade updatedGrade = gradeService.updateGrade(grade);
        return new ResponseEntity<>(updatedGrade, HttpStatus.OK);
    }

    @PatchMapping("id/{id}")
    public ResponseEntity<Grade> patchGrade(@PathVariable Long id, @RequestBody Grade grade) {
        grade.setId(id);
        Grade patchedGrade = gradeService.patchGrade(grade);
        return new ResponseEntity<>(patchedGrade, HttpStatus.OK);
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<Void> deleteGradeById(@PathVariable Long id) {
        gradeService.deleteGradeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllGrades() {
        gradeService.deleteAllGrades();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("studentId/{studentId}")
    public ResponseEntity<Void> deleteGradeByStudentId(@PathVariable Long studentId) {
        gradeService.deleteGradeByStudentId(studentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
