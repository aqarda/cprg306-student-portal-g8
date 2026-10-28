/**
 * File: app/layout.tsx
 * Author: Patrick Bouley
 * Date: October 27, 2026
 *
 * This file defines the root layout for the student portal.
 * It receives the page content through the children prop.
 * It imports and displays the Navbar above the page content and the Footer below it.
 * Tailwind CSS is used to style the background and keep the Footer at the bottom of the page.
 * The output is a consistent layout that wraps all pages in the application.
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// We dont need this but it allows us to just define some data for the browser side of things
export const metadata: Metadata = {
    title: "New Generation High School",
    description: "Student Portal",
};

// children acts as a placeholer component, but should handle any components that come from the main page, 
// and just display that info between the Navbar and Footer components 
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-slate-100 min-h-screen flex flex-col">
                <Navbar />

                <div className="flex-1">
                    {children}
                </div>

                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;