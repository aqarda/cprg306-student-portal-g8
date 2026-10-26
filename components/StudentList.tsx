/*
* This component draws one StudentCard for every student it is given.
 * Its inputs are two props: students (the array to show, already filtered by the search)
 * and onRemove (the function from StudentPortal that removes a student by id).
 * It works out whether the array is empty, uses .map() with each student's id as the key,
 * and passes onRemove straight down to every card without changing it.
 * The output is a grid of cards (one column on a phone, more on a wider screens), or a display
 * message when there are no students to show.
 */

import StudentCard from "@/components/StudentCard";
import { Student } from "@/data/students";

interface StudentListProps {
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {

    // True when the list was cleared, or when the search matches nobody
    const isEmpty = students.length === 0;

    return (
        <div>
            {isEmpty ? (

                // ===== No students to show =====
                <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                    <p className="text-lg font-bold text-slate-900">No students to show.</p>
                    <p className="text-sm text-slate-500 mt-1">
                        Try a different search, or add a student below.
                    </p>
                </div>

            ) : (

                // ===== One card per student =====
                // items-start lets an open card grow without stretching the cards beside it
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {students.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            onRemove={onRemove}
                        />
                    ))}
                </div>

            )}
        </div>
    );
};

export default StudentList;