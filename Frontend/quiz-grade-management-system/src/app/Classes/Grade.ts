import { Exam } from "./Exam";
import { Student } from "./Student";

export interface Grade {
    id: number;
    value: number; 
    student: Student;
    exam: Exam;

    exam_id: number;
    student_id: number;
    average: number;
}
   
