// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";

// UI Components
import ArticleContent from "@/components/wiki/ArticleContent";

export default async function Page({ params }: { params: { id: string } }) {

    let response = await fetch( ServerSideEndpoint + `/api/articles/${params.id}/`, { cache: "no-store" } );
        
    if (response.ok) {
        let article = await response.json();

        return (
            <main className="articleView">
                <ArticleContent
                    id={ params.id }
                    title={ article.title }
                    author={ article.author }
                    table_of_content={ article.table_of_content }
                    html_content={ article.html_content }
                />
            </main>
        )
    }
    else {
        return (
            <div>404: Not Found</div>
        )
    }
}