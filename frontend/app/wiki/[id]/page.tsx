// Next Components
import Link  from "next/link";

// Styling
import "./page.style.css";

// UI Components
import ArticleContent from "@/components/wiki/ArticleContent";

export default function Page({ params }: { params: { id: string } }) {

    return (
        <main>
            <ArticleContent id={ params.id } />
            <Link href={ `/wiki/${ params.id }/edit` } >Edit</Link>
        </main>
    );
}