import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "New Generation High School",
    description: "Student Portal",
};

// This is just to see the Current NavBar

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
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