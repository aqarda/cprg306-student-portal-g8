
/**
 * File: StatsPanel.tsx
 * Author: Patrick Bouley
 * Date: October 27, 2026
 *
 * This component displays statistics about the students.
 * It receives an array of Student objects through props.
 * It calculates total students, honor roll, and graduating students.
 * The calculations update when the student list changes.
 * It displays the results in three responsive Tailwind cards.
 */

import type { Student } from "@/data/students";

// Interface for the component's props
interface StatsPanelProps {
    students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {

    // Calculate values from the whole student array
    const totalStudents = students.length;

    // If a student is at 80 or above, they make the honor roll list
    const honourRoll = students.filter(
        (student) => student.average >= 80
    ).length;

    // If a student is in grade 12, they should be graduating (based on the assignment info)
    const graduating = students.filter(
        (student) => student.grade === 12
    ).length;

    // Display the calculated statistics
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total students */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-sm font-medium text-slate-500">
                    Students
                </h3>

                <p className="text-3xl font-bold text-blue-600 mt-2">
                    {totalStudents}
                </p>

                <p className="text-xs text-slate-500 mt-2">
                    Total enrolled
                </p>
            </div>
            {/* Honour roll */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-sm font-medium text-slate-500">
                    Honour Roll
                </h3>

                <p className="text-3xl font-bold text-blue-600 mt-2">
                    {honourRoll}
                </p>

                <p className="text-xs text-slate-500 mt-2">
                    Average of 80% or higher
                </p>
            </div>
            {/* Graduating students */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-sm font-medium text-slate-500">
                    Graduating
                </h3>

                <p className="text-3xl font-bold text-blue-600 mt-2">
                    {graduating}
                </p>

                <p className="text-xs text-slate-500 mt-2">
                    Grade 12 students
                </p>
            </div>
        </div>
    );
};

export default StatsPanel;