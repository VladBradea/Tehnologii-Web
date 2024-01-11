import { Grade } from "./Grade";
import { Teacher } from "./Teacher";

export interface Exam {
    id: number;
    course: string;
    examDate: string;

    teacher: Teacher;
    grade: number;
    
}
