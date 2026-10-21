
/**
 * File: Navbar.tsx
 * Author: Patrick Bouley
 * Date: October 21, 2026
 *
 * This component displays the school header and navigation bar.
 * It does not require props because the content is predefined.
 * The header displays the school name and Student Portal badge.
 * The navigation bar links to three sections on the same page.
 * Tailwind CSS handles the styling and responsive layout.
 */

const Navbar = () => {
    return (
        <header className="bg-white border-b border-slate-200">

            {/* Header title and badge */}
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School
                </h1>

                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    Student Portal
                </span>

            </div>

            {/* Navigation links */}
            <nav className="bg-blue-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center gap-6">

                    <a
                        href="#overview"
                        className="text-blue-800 font-medium hover:text-blue-500 transition"
                    >
                        Overview
                    </a>

                    <a
                        href="#students"
                        className="text-blue-800 font-medium hover:text-blue-500 transition"
                    >
                        Students
                    </a>

                    <a
                        href="#add-student"
                        className="text-blue-800 font-medium hover:text-blue-500 transition"
                    >
                        Add a student
                    </a>

                </div>
            </nav>

        </header>
    );
};

export default Navbar;
