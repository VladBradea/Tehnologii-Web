package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Exercise;
import com.quizGrade.quizGrade.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    public Exercise createExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
        return exercise;
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public Optional<Exercise> getExerciseById (long id) {
        return exerciseRepository.findById(id);
    }

    public boolean deleteExerciseById (long id) {
        Optional<Exercise> exercise = exerciseRepository.findById(id);
        if (exercise.isPresent()) {
            exerciseRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
