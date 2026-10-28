"use client";

/*
 * File: StudentPortal.tsx
 * Author: Fernando Lopez-Areal Serrano
 * Date: October 24, 2026
 * This component manages the main student portal and its student data.
 * It imports the starting students and stores the list and search text in state.
 * It handles adding, removing, and clearing students through callback functions.
 * It filters students by name without changing the original student list.
 * It displays the overview, student list, and add student sections.
 */

import { useState } from "react";
import { initialStudents } from "@/data/students";
import type { Student } from "@/data/students";

import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";
import SearchBox from "@/components/SearchBox";
import AddStudent from "@/components/AddStudent";

const StudentPortal = () => {

    // students and search state
    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [searchText, setSearchText] = useState("");

    // remove student
    const handleRemove = (id: number) => {
        setStudents((currentStudents) =>
            currentStudents.filter((student) => student.id !== id)
        );
    };

    // clear all students
    const handleClearAll = () => {
        setStudents([]);
    };

    // add a student
    const handleAdd = (newStudent: Omit<Student, "id">) => {
        setStudents((currentStudents) => {
            const nextId = currentStudents.reduce(
                (highestId, student) => Math.max(highestId, student.id),
                0
            ) + 1;

            return [
                ...currentStudents,
                {
                    id: nextId,
                    ...newStudent,
                },
            ];
        });
    };

    // filter by name
    const filteredStudents = students.filter((student) => {
        const fullName =
            `${student.firstName} ${student.lastName}`.toLowerCase();

        return fullName.includes(searchText.trim().toLowerCase());
    });

    return (
        <main className="mx-auto max-w-7xl px-4 py-8">

            {/* overview */}
            <section id="overview" className="mb-12">
                <h1 className="mb-6 text-3xl font-bold text-slate-900">
                    Student Overview
                </h1>

                <StatsPanel students={students} />
            </section>

            {/* student section */}
            <section id="students" className="mb-12">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Students
                    </h2>

                    <button
                        type="button"
                        onClick={handleClearAll}
                        className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                    >
                        Clear All
                    </button>
                </div>

                <SearchBox
                    searchText={searchText}
                    onSearchChange={setSearchText}
                />

                <StudentList
                    students={filteredStudents}
                    onRemove={handleRemove}
                />
            </section>

            {/* add student section */}
            <section id="add-student" className="mb-12">
                <AddStudent onAdd={handleAdd} />
            </section>

        </main>
    );
};

export default StudentPortal;
