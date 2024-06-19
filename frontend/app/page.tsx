// Next Components
import Link  from "next/link";
import Image from "next/image";

// Styling
import "./page.style.css";

// UI Components
import ArticlesList from "@/components/root/ArticlesList";

export default function Page() {
    return (
        <main className="main">
            <h1>wikiNetes</h1>
            <ArticlesList/>
        </main>
    );
}