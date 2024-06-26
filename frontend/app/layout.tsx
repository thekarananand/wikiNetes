// Next Components
import type { Metadata } from "next";

// Global Styling
import "./globals.css";

// Fonts
import { inter } from "@/fonts/Inter";
import { jetbrains_mono } from "@/fonts/Jetbrains_Mono";

// UI Components
import { Header, ColorScheme } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GrainyNoiseSVG from "@/components/common/GrainyNoiseSVG";

export const metadata: Metadata = {
    title: "WikiNetes",
    description: "WikiNetes is a Modren Encyclopedia, build to Leverage Cloud Native Technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className }
                data-color-scheme={ ColorScheme }>
                <Header/>
                {children}
                <Footer/>
                <GrainyNoiseSVG/>
            </body>
        </html>
    );
};