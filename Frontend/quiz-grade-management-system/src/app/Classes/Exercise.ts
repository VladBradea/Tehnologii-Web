import { Exam } from "./Exam";

export interface Exercise {
    id: number;
    text: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
    subject: string;
    exam: Exam;

}
