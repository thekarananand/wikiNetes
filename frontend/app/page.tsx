// Next Components
import Link  from "next/link";
import Image from "next/image";

// Styling
import "./page.style.css";

// Fonts

// UI Components
export default function Page() {
    return (
        <main className="main">
            <h1>wikiNetes</h1>
            <Link href='/status/'>Status</Link>
        </main>
    );
}