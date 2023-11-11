package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Exercise;
import com.quizGrade.quizGrade.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/exercises/")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @PostMapping
    public ResponseEntity<?> createExercise(@RequestBody Exercise exercise) {
        try {
            Exercise createdExercise = exerciseService.createExercise(exercise);
            return new ResponseEntity<>(createdExercise, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Exercise>> getAllExercises() {
        List<Exercise> exercises = exerciseService.getAllExercises();
        return new ResponseEntity<>(exercises, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<?> getExerciseById (@PathVariable("id") long id) {
        try {
            Optional<Exercise> exercise = exerciseService.getExerciseById(id);
            return new ResponseEntity<>(exercise, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<HttpStatus> deleteExerciseById(@PathVariable("id") long id) {
        if (exerciseService.deleteExerciseById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
