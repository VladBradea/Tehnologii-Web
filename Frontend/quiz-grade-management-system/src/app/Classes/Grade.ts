import { Exam } from "./Exam";
import { Student } from "./Student";

export interface Grade {
    id: number;
    value: number;
    exam_id: number;
    student_id: number;

    student: Student;
    exam: Exam;
}
