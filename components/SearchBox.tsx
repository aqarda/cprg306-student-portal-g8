"use client";

/*
 * File: SearchBox.tsx
 * Author: Fernando Lopez-Areal Serrano
 * Date: October 24, 2026
 * This component displays a search box for finding students.
 * It receives the current search text and a function through props.
 * When the user types, the component sends the new text to StudentPortal.
 * StudentPortal uses that text to filter students by name.
 * The output is a controlled search input styled with Tailwind CSS.
 */

interface SearchBoxProps {
    searchText: string;
    onSearchChange: (value: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
    return (
        <div className="mb-6">
            {/* Search label */}
            <label
                htmlFor="student-search"
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                Search Students
            </label>

            {/* Controlled search input */}
            <input
                id="student-search"
                type="text"
                placeholder="Search by student name..."
                value={searchText}
                onChange={(event) => onSearchChange(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBox;
