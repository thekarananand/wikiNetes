// Next Components
import Link from "next/link";

// Styling
import "./ListArticles.style.css";

// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";

const ListArticles = async () => {

    let articleList:any = [];

    const getArticlesList = async () => {
        let response = await fetch( ServerSideEndpoint + "/api/articles/", { cache: "no-store" } );
        
        if ( response.ok ) {
            articleList = await response.json();
        };
    };

    await getArticlesList();

    return (
        <section className="ListArticles">
            <div className="wrapper">
                <h2>Featured Articles</h2>
                <ul>
                    { articleList.map( ( article:{id:string, title:string, author:string}, index: number ) => (
                        <li key={index}>
                            <Link href={"./wiki/" + article.id}>
                                <h3 className="title">{article.title}</h3>
                                <p className="author">{article.author}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );

};

export default ListArticles;