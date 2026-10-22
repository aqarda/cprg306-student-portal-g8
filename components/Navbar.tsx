"use client";

import {useState} from "react";
/*
 * This component displays the school header and navigation bar.
 * It does not require props because the content is predefined.
 * The header displays the school name and Student Portal badge.
 * The navigation bar links to three sections on the same page.
 * Tailwind CSS handles the styling and responsive layout.
 */

const Navbar = () => {

    const [active, setActive] = useState("overview");

    const linkStyle = (section: string) => {
        return active === section
        ? "bg-white shadow-sm text-blue-700"
        : "text-blue-800 hover:bg-blue-100";
    }

    return (
        <header className="bg-white border-b border-slate-200">

            {/* School name and badge */}
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School
                </h1>

                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    Student Portal
                </span>

            </div>

            {/* Navigation links */}
            <nav className="bg-blue-100 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center gap-6">

                    <a
                        href="#overview"
                        onClick={()=> setActive("overview")}
                        // transition makes the color change slightly more natural, instead of just a instant change
                        className={`inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${linkStyle("overview")}`}> 
                        Overview
                    </a>

                    <a
                        href="#students"
                        onClick={()=> setActive("students")}
                        className={`inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${linkStyle("students")}`}>
                        Students
                    </a>

                    <a
                        href="#add-student"
                        onClick={()=> setActive("add-student")}
                        className={`inline-block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${linkStyle("add-student")}`}>
                        Add a student
                    </a>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
