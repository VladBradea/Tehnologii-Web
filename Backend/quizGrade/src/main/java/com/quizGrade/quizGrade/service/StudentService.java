package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Student;
import com.quizGrade.quizGrade.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private GradeService gradeService;

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

    public Student updateStudent(Student student) {
        return studentRepository.save(student);
    }

    public Optional<Student> patchStudent(Student student, Long id) {
        return studentRepository.findById(id)
                .map(existingStudent -> {
                    if (student.getEmail() != null) {
                        existingStudent.setEmail(student.getEmail());
                    }
                    if (student.getFirstName() != null) {
                        existingStudent.setFirstName(student.getFirstName());
                    }
                    if (student.getLastName() != null) {
                        existingStudent.setLastName(student.getLastName());
                    }
                    existingStudent.setTakingExam(student.getIsTakingExam());

                    return studentRepository.save(existingStudent);
                });
    }
/*
    public Optional<Student> patchStudentByExam(Student student, Long id) {
        Optional<Exam> optionalExam = examRepository.findById(student.getExam().getId());
        return studentRepository.findById(id)
                .map(existingStudent -> {
                    if (student.getExam() != null) {
                        if (student.isTakingExam()) {
                            existingStudent.setExam(null);
                            existingStudent.setTakingExam(false);
                        } else {
                            existingStudent.setExam(student.getExam());
                            existingStudent.setTakingExam(true);
                        }
                    }
                    return studentRepository.save(existingStudent);
                });
    }
*/

    public boolean deleteStudentById(long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (student.isPresent()) {
            gradeService.deleteGradeByStudentId(student.get().getId()); // delete all grades for this student
            studentRepository.deleteById(student.get().getId());
            return true;
        }
        return false;
    }

    public boolean deleteStudentByEmail(String email) {
        Optional<Student> student = studentRepository.findByEmail(email);
        if(student.isPresent()) {
            gradeService.deleteGradeByStudentId(student.get().getId()); // delete all grades for this student
            studentRepository.deleteById(student.get().getId());
            return true;
        }
        return false;
    }
}
