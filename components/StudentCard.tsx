/*
 * File: components/StudentCard.tsx
 * Author: John Leandro Loyao (Member B)
 * Date: October 26, 2026
 *
 * This component draws one student's card: their full name, their grade, and two buttons.
 * Its inputs are two props: student (one Student object) and onRemove (a function from
 * StudentPortal that removes a student by id). Each card keeps its own showDetails state,
 * so Show details opens only this card, and the button label and Honour roll badge are
 * worked out from that state and the student's average on every render. The output is a
 * white card that can reveal the average, and a Remove button that calls onRemove with
 * this student's id so StudentPortal can take them off the list.
 */

"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface StudentCardProps {
    student: Student;
    onRemove: (id: number) => void;
}

// An average of this or higher puts a student on the honour roll
const honourRollAverage = 80;

const StudentCard = ({student, onRemove}: StudentCardProps) => {
    // Every card gets its own copy of this, so opening one card does not open the others
    const [showDetails, setShowDetails] = useState(false);
    const isHonourRoll = student.average >= honourRollAverage;
    const buttonLabel = showDetails ? "Hide details" : "Show details";

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    // The card does not change the list itself. It asks StudentPortal to do it.
    const handleRemove = () => {
        onRemove(student.id);
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            {/* Name and grade */}
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900">
                    {student.firstName} {student.lastName}
                </h3>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    Grade {student.grade}
                </span>
            </div>

            {showDetails ? (
                <div className="mt-4 rounded-lg bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Average</p>
                    <div className="flex items-center justify-between gap-3 mt-1">
                        <p className="text-2xl font-bold text-blue-600">{student.average}%</p>
                        {isHonourRoll ? (
                            <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                Honour roll
                            </span>
                        ) : null}
                    </div>
                </div>
            ) : null}

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
                <button
                    onClick={handleToggleDetails}
                    className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white
                        hover:bg-blue-700 transition cursor-pointer"
                >
                    {buttonLabel}
                </button>
                <button
                    onClick={handleRemove}
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-rose-600
                        hover:bg-rose-50 transition cursor-pointer"
                >
                    Remove
                </button>
            </div>

        </div>
    );
};

export default StudentCard;