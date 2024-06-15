// Next Components
import type { Metadata } from "next";

// Global Styling
import "./globals.css";

// Fonts
import { inter } from "@/fonts/Inter";
import { jetbrain_mono } from "@/fonts/Jetbrains_Mono";

export const metadata: Metadata = {
    title: "WikiNetes",
    description: "WikiNetes is a Modren Encyclopedia, build to Leverage Cloud Native Technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
