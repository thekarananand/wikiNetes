// Styling
import "./ArticleContent.style.css";

// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";

const ArticleContent = async ( props: { id:string } ) => {

    let response = await fetch( ServerSideEndpoint + `/api/articles/${props.id}/`, { cache: "no-store" } );
        
    if (response.ok) {
        let article = await response.json();

        return (
            <section>
                <div className="article-header">
                    <h1>{ article.title }</h1>

                    <div className='metadata'>
                        Written by: <span>{ article.author }</span>
                    </div>
                </div>
                <div
                    className="article_body"
                    dangerouslySetInnerHTML={ { __html: article.html_content } } />
            </section>
        );

    }

    else {
        return (
            <section>
                <div>Not Found</div>
            </section>
        );
    }

};

export default ArticleContent;