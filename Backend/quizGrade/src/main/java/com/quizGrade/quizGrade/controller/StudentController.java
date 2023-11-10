package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.exceptions.NotFoundException;
import com.quizGrade.quizGrade.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/students/")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<?> createStudent(@RequestBody Student student) {
        try {
            Student createdStudent = studentService.createStudent(student);
            return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return  new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable("id") long id) {
        try {
            Optional<Student> student = studentService.getStudentById(id);
            return new ResponseEntity<>(student, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("email/{email}")
    public ResponseEntity<?> getStudentById(@PathVariable("email") String email) {
        try {
            Optional<Student> student = studentService.getStudentByEmail(email);
            return new ResponseEntity<>(student, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateStudent(@PathVariable("id") long id, @RequestBody Student student) {
        try {
            Student student1 = studentService.updateStudent(id, student);
            return new ResponseEntity<>(student1, HttpStatus.OK);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PatchMapping("{id}")
    public ResponseEntity<?> patchStudent(@PathVariable("id") long id, @RequestBody Student student) {
        try {
            Student student1 = studentService.patchStudent(id, student);
            return new ResponseEntity<>(student1, HttpStatus.OK);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("email/{email}")
    public ResponseEntity<HttpStatus> deleteStudentByEmail(@PathVariable("email") String email) {
        if (studentService.deleteStudentByEmail(email)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable("id") long id) {
        if (studentService.deleteStudentById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
