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

    public Student updateStudent(Long id, Student newStudent){
        Student student = studentRepository.findById(id).orElse(null);
        if (student == null){
            return null;
        }
        student.setEmail(newStudent.getEmail());
        student.setFirstName(newStudent.getFirstName());
        student.setLastName(newStudent.getLastName());
        return student;
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

    public boolean deleteStudentById(long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (student.isPresent()) {
            studentRepository.deleteById(student.get().getId());
            return true;
        }
        return false;
    }

    public boolean deleteStudentByEmail(String email) {
        Optional<Student> student = studentRepository.findByEmail(email);
        if(student.isPresent()) {
            studentRepository.deleteById(student.get().getId());
            return true;
        }
        return false;
    }
}
