package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.exceptions.NotFoundException;
import com.quizGrade.quizGrade.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student createStudent(Student student) {
        studentRepository.save(student);
        return student;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById (long id) {
        return studentRepository.findById(id);
    }

    public Optional<Student> getStudentByEmail (String email) {
        return studentRepository.findByEmail(email);
    }

    public Student updateStudent(long id, Student student) throws NotFoundException {
        Student updateStudent = studentRepository.findById(id).orElseThrow(() ->
                new NotFoundException("Student not found with id: " + id));
        updateStudent.setId(student.getId());
        updateStudent.setEmail(student.getEmail());
        updateStudent.setFirstName(student.getFirstName());
        updateStudent.setLastName(student.getLastName());
        return updateStudent;
    }

    public Student patchStudent(long id, Student student) throws NotFoundException {
        Student patchStudent = studentRepository.findById(id).orElseThrow(() ->
                new NotFoundException("Student not found with id: " + id));
        if (student.getEmail() != null) {
            patchStudent.setEmail(student.getEmail());
        }
        if (student.getFirstName() != null) {
            patchStudent.setFirstName(student.getFirstName());
        }
        if (student.getLastName() != null) {
            patchStudent.setLastName(student.getLastName());
        }
        return patchStudent;
    }
}
