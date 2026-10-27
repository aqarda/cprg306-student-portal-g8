/**
 * File: Footer.tsx
 * Author: Patrick Bouley
 * Date: October 26, 2026
 *
 * This component displays the school's footer.
 * It does not require props because the contact details are predefined.
 * It separates the school name from its contact information.
 * Tailwind CSS controls the layout and responsive styling.
 * The output is a footer shared across the student portal.
 */

const Footer = () => {

    // Shared style for the contact information
    const textStyle = "text-sm text-slate-600";

    return (
        <footer className="bg-blue-100 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-8">
                {/* School information and contact details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    {/* School information */}
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            New Generation High School
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                            Student Portal
                        </p>
                    </div>
                    {/* Contact information */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-slate-900">
                            Contact Information
                        </h3>

                        <p className={textStyle}>
                            1410 16th Ave SE
                        </p>

                        <p className={textStyle}>
                            403-822-5487
                        </p>

                        <p className={textStyle}>
                            NewGenHS@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;