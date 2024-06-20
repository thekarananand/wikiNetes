
// UI Components
import EditArticle from "@/components/index/EditArticle";

export default function Page({ params }: { params: { id: string } }) {

    return (
        <main>
            <EditArticle id={ params.id }/>
        </main>
    );
}