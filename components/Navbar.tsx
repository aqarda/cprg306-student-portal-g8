/*
 * File: Navbar.tsx
 * Author: Patrick Bouley
 * Date: October 22, 2026
 * 
 * 
 * This component displays the school header and navigation bar.
 * It does not require props because the content is predefined.
 * The header displays the school name and Student Portal badge.
 * The navigation bar links to three sections on the same page.
 * Tailwind CSS handles the styling and responsive layout.
 */

"use client";

import {useState} from "react";

const Navbar = () => {

    // This just means that "overview" will be highlighted by default when the component first laods 
    const [active, setActive] = useState("overview");

        // Returns the appropriate Tailwind classes for each navigation link. This just makes it so if we 
        // wanna edit anything with the links, we can do it all here, and not have to manually change each section anymore
        // Plus it helps keep the oevral code below much easier to read

        const linkStyle = (section: string) => {

        // Classes shared by every navigation link
        const base = "inline-block px-4 py-2 rounded-lg font-bold transition-colors duration-200";
                    // Transition makes the color change happen over a duration of time. instead of instantly. looks more natural

        // Classes for the currently selected section
        const activeStyle = "bg-slate-100 shadow-lg text-blue-700";

        // Classes for links that are not selected
        const inactiveStyle = "text-blue-800 hover:bg-blue-200 active:bg-blue-300";

        return `${base} ${active === section ? activeStyle : inactiveStyle}`;
};

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
                        className={linkStyle("overview")}> 
                        Overview
                    </a>

                    <a
                        href="#students"
                        onClick={()=> setActive("students")}
                        className={linkStyle("students")}>
                        Students
                    </a>

                    <a
                        href="#add-student"
                        onClick={()=> setActive("add-student")}
                        className={linkStyle("add-student")}>
                        Add a student
                    </a>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
