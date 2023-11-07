package com.quizGrade.quizGrade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication(scanBasePackages = "com.quizGrade.quizGrade")
public class QuizGradeApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizGradeApplication.class, args);
	}

}
