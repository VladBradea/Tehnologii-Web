package com.quizGrade.quizGrade.controller;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.exceptions.IncompleteStudentException;
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
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("email/{email}")
    public ResponseEntity<?> getStudentById(@PathVariable("email") String email) {
        try {
            Optional<Student> student = studentService.getStudentByEmail(email);
            return new ResponseEntity<>(student, HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("id/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") Long id, @RequestBody Student student) {
        student.setId(id);
        Student updatedStudent = studentService.updateStudent(student);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
    }

    @PatchMapping("id/{id}")
    public ResponseEntity<Student> patchStudent(@PathVariable("id") Long id, @RequestBody Student student) {
        return studentService.patchStudent(student, id)
                .map(patchedStudent -> new ResponseEntity<>(patchedStudent, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable("id") long id) {
        if (studentService.deleteStudentById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("email/{email}")
    public ResponseEntity<HttpStatus> deleteStudentByEmail(@PathVariable("email") String email) {
        if (studentService.deleteStudentByEmail(email)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
