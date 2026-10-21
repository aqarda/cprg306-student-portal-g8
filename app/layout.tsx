import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
    title: "New Generation High School",
    description: "Student Portal",
};

// This is just to see the Current NavBar

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-slate-100 min-h-screen">
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;