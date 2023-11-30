package com.quizGrade.quizGrade.service;

import com.quizGrade.quizGrade.classes.Teacher;
import com.quizGrade.quizGrade.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public Teacher createTeacher (Teacher teacher) {
        teacherRepository.save(teacher);
        return teacher;
    }

    public List<Teacher> getAllTeachers () {
        return teacherRepository.findAll();
    }

    public Optional<Teacher> getTeacherById (long id) {
        return teacherRepository.findById(id);
    }

    public Optional<Teacher> getTeacherByEmail(String email) {
        return teacherRepository.findByEmail(email);
    }

    public Teacher updateTeacher(Teacher teacher) {return teacherRepository.save(teacher);}

    public Optional<Teacher> patchTeacher(Teacher teacher, Long id) {
        return teacherRepository.findById(id)
                .map(existingTeacher -> {
                    if (teacher.getFirstName() != null) {
                        existingTeacher.setFirstName(teacher.getFirstName());
                    }
                    if (teacher.getLastName() != null) {
                        existingTeacher.setLastName(teacher.getLastName());
                    }
                    if (teacher.getEmail() != null) {
                        existingTeacher.setEmail(teacher.getEmail());
                    }
                    if (teacher.getPassword() != null) {
                        existingTeacher.setPassword(teacher.getPassword());
                    }
                    return teacherRepository.save(existingTeacher);
                });
    }

    public boolean deleteTeacherByEmail (String email) {
        Optional<Teacher> teacher = teacherRepository.findByEmail(email);
        if (teacher.isPresent()) {
            teacherRepository.deleteById(teacher.get().getId());
            return true;
        }
        return false;
    }

    public boolean deleteTeacherById (long id) {
        Optional<Teacher> teacher = teacherRepository.findById(id);
        if (teacher.isPresent()) {
            teacherRepository.deleteById(teacher.get().getId());
            return true;
        }
        return false;
    }
}
