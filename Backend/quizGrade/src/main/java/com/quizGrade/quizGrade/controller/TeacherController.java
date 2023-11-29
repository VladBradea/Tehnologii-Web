package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Teacher;
import com.quizGrade.quizGrade.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/teachers/")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping
    public ResponseEntity<?> createTeacher (@RequestBody Teacher teacher) {
        try {
            Teacher createdTeacher = teacherService.createTeacher(teacher);
            return new ResponseEntity<>(createdTeacher, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Teacher>> getAllTeachers () {
        List<Teacher> teachers = teacherService.getAllTeachers();
        return new ResponseEntity<>(teachers, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<?> getTeacherById(@PathVariable("id") long id) {
        try {
            Optional<Teacher> teacher = teacherService.getTeacherById(id);
            return new ResponseEntity<>(teacher, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("email/{email}")
    public ResponseEntity<?> getTeacherByEmail (@PathVariable("email") String email) {
        try {
            Optional<Teacher> teacher = teacherService.getTeacherByEmail(email);
            return new ResponseEntity<>(teacher, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<HttpStatus> deleteTeacherById(@PathVariable("id") long id) {
        if (teacherService.deleteTeacherById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("email/{email}")
    public ResponseEntity<HttpStatus> deleteTeacherByEmail(@PathVariable("email") String email) {
        if (teacherService.deleteTeacherByEmail(email)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
