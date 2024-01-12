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

    public List<Exercise> getExercisesByExamId (long examId) {
        return exerciseRepository.findByExamId(examId);
    }

    public Exercise updateExercise (Exercise exercise){return exerciseRepository.save(exercise);}

    public Optional<Exercise> patchExercise (Exercise exercise, Long id) {
        return exerciseRepository.findById(id)
                .map(existingExercise -> {
                   if (exercise.getText() != null) {
                       existingExercise.setText(exercise.getText());
                   }
                   if (exercise.getOption1() != null) {
                       existingExercise.setOption1(exercise.getOption1());
                   }
                   if (exercise.getOption2() != null) {
                       existingExercise.setOption2(exercise.getOption2());
                   }
                   if (exercise.getOption3() != null) {
                       existingExercise.setOption3(exercise.getOption3());
                   }
                   if (exercise.getOption4() != null) {
                       existingExercise.setOption4(exercise.getOption4());
                   }
                   if (exercise.getAnswer() != null) {
                       existingExercise.setAnswer(exercise.getAnswer());
                   }
                   if (exercise.getExam() != null) {
                       existingExercise.setExam(exercise.getExam());
                   }

                   return exerciseRepository.save(existingExercise);
                });
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
