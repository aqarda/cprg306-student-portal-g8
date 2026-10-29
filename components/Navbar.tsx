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

const Navbar = () => {

    // Shared styling for navigation links, because they all basically just do the same thing
    const linkStyle =
        "inline-block px-6 py-2 rounded-lg font-bold text-blue-800 " +
        "hover:bg-blue-200 active:bg-blue-300 " +
        "transition-colors duration-200";

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
                <div className="max-w-5xl mx-auto py-2 flex flex-wrap items-center gap-2">

                    <a
                        href="#overview"
                        className={linkStyle}> 
                        Overview
                    </a>

                    <a
                        href="#students"
                        className={linkStyle}>
                        Students
                    </a>

                    <a
                        href="#add-student"
                        className={linkStyle}>
                        Add a student
                    </a>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;