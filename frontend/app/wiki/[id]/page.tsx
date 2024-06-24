// Styling
import "./page.style.css";

// UI Components
import ArticleContent from "@/components/wiki/ArticleContent";

export default function Page({ params }: { params: { id: string } }) {

    return (
        <main className="articleView">
            <ArticleContent id={ params.id } />
        </main>
    );
}