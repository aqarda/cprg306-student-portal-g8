"use client";

/*
 * File: AddStudent.tsx
 * Author: Fernando Lopez-Areal Serrano
 * Date: October 24, 2026
 * This component allows users to add a new student to the portal.
 * It receives an onAdd function from StudentPortal through props.
 * It uses state to manage the four student information inputs.
 * It checks that both names are filled before adding a student.
 * After adding, it resets the inputs to their default values.
 */

import { useState } from "react";
import type { Student } from "@/data/students";

// props
interface AddStudentProps {
    onAdd: (student: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {

    // input states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("9");
    const [average, setAverage] = useState("70");

    // adding student function
    const handleAdd = () => {
        if (!firstName.trim() || !lastName.trim()) {
            return;
        }

        if (
            grade.trim() === "" ||
            average.trim() === "" ||
            !Number.isInteger(Number(grade)) ||
            Number(grade) < 9 ||
            Number(grade) > 12 ||
            !Number.isFinite(Number(average)) ||
            Number(average) < 0 ||
            Number(average) > 100
        ) {
            return;
        }

        onAdd({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            grade: Number(grade),
            average: Number(average),
        });

        // resets the inputs when added
        setFirstName("");
        setLastName("");
        setGrade("9");
        setAverage("70");
    };

    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
                Add a Student
            </h2>

            {/*student info input*/}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3 text-slate-900"
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3 text-slate-900"
                    />
                </div>

                <div>
                    <label htmlFor="grade" className="mb-2 block text-sm font-medium text-slate-700">
                        Grade
                    </label>
                    <input
                        id="grade"
                        type="number"
                        min={9}
                        max={12}
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3 text-slate-900"
                    />
                </div>

                <div>
                    <label htmlFor="average" className="mb-2 block text-sm font-medium text-slate-700">
                        Average
                    </label>
                    <input
                        id="average"
                        type="number"
                        min={0}
                        max={100}
                        value={average}
                        onChange={(e) => setAverage(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3 text-slate-900"
                    />
                </div>
            </div>

            {/* student button */}
            <button
                type="button"
                onClick={handleAdd}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
                Add Student
            </button>
        </div>
    );
};

export default AddStudent;
