// Next Components
import Link  from "next/link";

// Styling
import "./ArticleContent.style.css";

// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";

const ArticleContent = async ( props: { id:string } ) => {

    let response = await fetch( ServerSideEndpoint + `/api/articles/${props.id}/`, { cache: "no-store" } );
        
    if (response.ok) {
        let article = await response.json();

        console.log(article)

        return (
            <div className="wrapper">
                <aside>
                    <div className="article-header-bar">

                        <h2>{ article.title }</h2>

                        <div className='metadata'>
                            Written by: <span>{ article.author }</span>
                        </div>
                    </div>
                    <div className="table-bar">
                        <h2>Table of Content</h2>
                        <ol>
                            { article.table_of_content.map( ( content:string, index: number ) => (
                                <li key={index}>
                                    { content }
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="option-bar">
                        <Link className="btn" href={ `/wiki/${ props.id }/edit` } >Edit this Article</Link>
                    </div>
                </aside>
                <section className="article">

                    <div className="article-header">
                        <h1>{ article.title }</h1>

                        <div className='metadata'>
                            Written by: <span>{ article.author }</span>
                        </div>
                    </div>

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={ { __html: article.html_content } } />
                </section>
            </div>
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