"use client";

// Next Components
import Link  from "next/link";

// Next Components
import { useRouter } from "next/navigation";

// React Hooks
import { useState } from "react";

// Styling
import "./Editor.style.css";

// Fonts
import { inter } from "@/fonts/Inter";
import { jetbrain_mono } from "@/fonts/Jetbrains_Mono";

const Editor = ( props: {
    reqMethod   :string,
    reqURL      :string,
    title       :string,
    author      :string,
    md_content  :string,
    heading     :string,
} ) => {

    const router = useRouter();

    const [title,      setTitle     ] = useState(props.title);
    const [author,     setAuthor    ] = useState(props.author);
    const [md_content, setMD_content] = useState(props.md_content);

    const SendReq = async () => {
        
        const response = await fetch(props.reqURL, {
            method: props.reqMethod,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                title       : title , 
                author      : author ,
                md_content  : md_content
            })
        });

        if ( response.ok ) {
            let serverResponse = await response.json();

            if ( serverResponse?.Ping == "Pong" ){
                router.push( `/wiki/${serverResponse?.id}/` );
                router.refresh();
            };
        };

    };
    

    return(
        <div className="wrapper">
            <section>
                <div className="metadata">
                    <h3>Metadata</h3>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        className={inter.className}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="author">Author</label>
                    <input
                        name="author"
                        id="author"
                        type="text"
                        className={inter.className}
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="editor">
                    <label htmlFor="md_content">Article Content</label>
                    <textarea
                        name="md_content"
                        id="md_content"
                        className={jetbrain_mono.className}
                        onChange={(e) => setMD_content(e.target.value)}
                        value={md_content}/>
                </div>
            </section>
            <aside>
                <div className="option-bar">
                    <h3>Actions</h3>
                    <button
                        className={inter.className + " btn"}
                        onClick={ SendReq } >
                            Save Changes
                    </button>
                </div>
                <div className="related-bar">
                    <h3>Related Links</h3>
                    <ul>
                        <li>
                            <Link href={ "/md" }>
                                Markdown Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
    
};

export default Editor;