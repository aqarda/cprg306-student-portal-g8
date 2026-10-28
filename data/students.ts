/*
 * File: data/students.ts
 * Author: John Leandro Loyao (Member B)
 * Date: October 26, 2026
 *
 * This file holds the starting data for the New Generation High School student portal.
 * It exports the Student interface, which describes the five fields every student has,
 * and the initialStudents array, which holds the ten students the portal starts with.
 * It takes no inputs and does no processing; it is plain TypeScript with no React in it.
 * StudentPortal uses initialStudents as the starting value of its state, and the other
 * components import Student to describe their props.
 */

// Every component that works with a student uses this interface.
export interface Student {
    id: number;          // unique for every student
    firstName: string;
    lastName: string;
    grade: number;       // 9 to 12
    average: number;     // a mark out of 100 (80 or more = honour roll)
}
// Totals for testing: 10 students, 4 on the honour roll, 3 in grade 12.
// Every last name is different, so searching a last name finds exactly one student.
export const initialStudents: Student[] = [
    // Grade 12
    { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 91 },
    { id: 2, firstName: "Liam", lastName: "Smith", grade: 12, average: 76 },
    { id: 3, firstName: "Priya", lastName: "Vane", grade: 12, average: 65 },

    // Grade 11
    { id: 4, firstName: "Mirah", lastName: "Reyes", grade: 11, average: 80 },    // exactly 80, so still honour roll
    { id: 5, firstName: "Ethan", lastName: "Ferrer", grade: 11, average: 68 },

    // Grade 10
    { id: 6, firstName: "Maya", lastName: "Okafor", grade: 10, average: 88 },
    { id: 7, firstName: "Noah", lastName: "Patel", grade: 10, average: 79 },     // just under 80, so no badge
    
    // Grade 9
    { id: 8, firstName: "Ava", lastName: "Alcaraz", grade: 9, average: 73 },
    { id: 9, firstName: "Lucas", lastName: "Moreau", grade: 9, average: 84 },
    { id: 10, firstName: "Owen", lastName: "MacLeod", grade: 9, average: 58 },
];