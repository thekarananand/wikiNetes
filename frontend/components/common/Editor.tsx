"use client";

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
        <section className="Editor">

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

            <label htmlFor="md_content">Article Content</label>
            <textarea
                name="md_content"
                id="md_content"
                className={jetbrain_mono.className}
                onChange={(e) => setMD_content(e.target.value)}
                value={md_content}/>
            
            <button
                className={inter.className + " btn"}
                onClick={ SendReq } >
                    Save Changes
            </button>

        </section>
    );
    
};

export default Editor;