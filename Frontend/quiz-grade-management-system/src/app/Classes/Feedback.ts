import { Exam } from "./Exam";
import { Student } from "./Student";

export interface Feedback{
    id: number;
    comment: string;
    exam: Exam;
    student: Student;

}