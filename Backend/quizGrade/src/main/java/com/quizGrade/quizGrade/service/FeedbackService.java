package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Feedback;
import com.quizGrade.quizGrade.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllFeedbacks() {return feedbackRepository.findAll();}

    public Feedback getFeedbackById(Long id) {
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(id);
        return optionalFeedback.orElse(null);
    }

    public List<Feedback> getFeedbacksByExamId (Long examId) {return feedbackRepository.findByExamId(examId);}

    public Feedback updateFeedback(Feedback feedback) {return feedbackRepository.save(feedback);}

    public Optional<Feedback> patchFeedback(Feedback feedback, Long id) {
        return feedbackRepository.findById(id)
                .map(existingFeedback -> {
                    if (feedback.getComment() != null) {
                        existingFeedback.setComment(feedback.getComment());
                    }
                    if (feedback.getExam() != null) {
                        existingFeedback.setExam(feedback.getExam());
                    }
                    if (feedback.getStudent() != null) {
                        existingFeedback.setStudent(feedback.getStudent());
                    }

                    return feedbackRepository.save(existingFeedback);
                });
    }

    public void deleteAllFeedbacks() {feedbackRepository.deleteAll();}

    public void deleteFeedbackById(Long id) {feedbackRepository.deleteById(id);}

    public void deleteFeedbackByExamId (Long examId) {
        List<Feedback> feedbacksToDelete = feedbackRepository.findByExamId(examId);

        for (Feedback feedback : feedbacksToDelete) {
            feedbackRepository.deleteById(feedback.getId());
        }
    }
}
