// Next Components
import Link  from "next/link";

// Fonts
import { inter } from "@/fonts/Inter";
import { jetbrains_mono } from "@/fonts/Jetbrains_Mono";

// Styling
import "./ArticleContent.style.css";

const ArticleContent = async ( props: {
    id?                :string,
    title               :string,
    author             :string,
    table_of_content?  :any,
    html_content       :string
} ) => {

    return (
        <div className="wrapper">
            <aside>
                <div className="article-header-bar">

                    <h2>{ props.title }</h2>

                    <div className='metadata'>
                        Written by: <span>{ props.author }</span>
                    </div>
                </div>

                {
                    props?.table_of_content && (
                    <div className="table-bar">
                        <h3>Table of Content</h3>
                        <ol>     
                            {
                                props.table_of_content.map( ( content:string, index: number ) => (
                                    <li key={index}>
                                        { content }
                                    </li>))
                            }
                        </ol>
                    </div> )
                }

                {
                    props?.id && (
                    <div className="option-bar">
                        <h3>Actions</h3>
                        <Link
                            className="btn"
                            href={ `/wiki/${ props.id }/edit` }
                            >Edit this Article</Link>
                    </div> )
                }
                </aside>
                
                <section className={ "article " + jetbrains_mono.variable }>

                    <div className="article-header">
                        <h1>{ props.title }</h1>

                        <div className='metadata'>
                            Written by: <span>{ props.author }</span>
                        </div>
                    </div>

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={ { __html: props.html_content } } />
                </section>
            </div>
        );

};

export default ArticleContent;