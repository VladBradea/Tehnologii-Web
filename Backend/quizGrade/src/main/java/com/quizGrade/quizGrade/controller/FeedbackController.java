package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Feedback;
import com.quizGrade.quizGrade.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/feedbacks/")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        Feedback createdFeedback = feedbackService.createFeedback(feedback);
        return new ResponseEntity<>(createdFeedback, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<?> getFeedbackById(@PathVariable Long id) {
        Feedback feedback = feedbackService.getFeedbackById(id);
        if (feedback != null) {
            return new ResponseEntity<>(feedback, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("examId/{examId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByExamId(@PathVariable Long examId) {
        List<Feedback> feedbacks = feedbackService.getFeedbacksByExamId(examId);
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @PutMapping("id/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        feedback.setId(id);
        Feedback updatedFeedback = feedbackService.updateFeedback(feedback);
        return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
    }

    @PatchMapping("id/{id}")
    public ResponseEntity<Feedback> patchFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        return feedbackService.patchFeedback(feedback, id)
                .map(patchedFeedback -> new ResponseEntity<>(patchedFeedback, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<Void> deleteFeedbackById(@PathVariable Long id) {
        feedbackService.deleteFeedbackById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllFeedbacks() {
        feedbackService.deleteAllFeedbacks();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("examId/{examId}")
    public ResponseEntity<Void> deleteFeedbackByExamId(@PathVariable Long examId) {
        feedbackService.deleteFeedbackByExamId(examId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
