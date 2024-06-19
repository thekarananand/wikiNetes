// Next Components
import type { Metadata } from "next";

// Global Styling
import "./globals.css";

// Fonts
import { inter } from "@/fonts/Inter";
import { jetbrain_mono } from "@/fonts/Jetbrains_Mono";

// UI Components
import Header from "@/components/root/Header";
import Footer from "@/components/root/Footer";

export const metadata: Metadata = {
    title: "WikiNetes",
    description: "WikiNetes is a Modren Encyclopedia, build to Leverage Cloud Native Technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
};