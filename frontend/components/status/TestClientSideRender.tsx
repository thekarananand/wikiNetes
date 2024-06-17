"use client";

// React Hooks
import { useState } from "react";

// Styling
import "./Test.style.css";

// Runtime Varibles
import BackendAPI from "@/runtime_variables/BackendAPI";

const TestClientSideRender = ( props: { id:number } ) => {

    let [status, setStatus] = useState("Error");
    let [code,   setCode  ] = useState( 1 );

    const pingBackend = async () => {
        let response = await fetch( BackendAPI + "/ping/backend/", { cache: "no-store" } );
        let status_responce = await response.json();

        if ( status_responce?.Ping === "Pong" ) {
            setStatus("Normal");
            setCode( 0 );
        }
    };

    pingBackend();
    let status_box_className:string = "status-box ";
    if ( code ) { status_box_className += "error"; }

    return (
        <li className={ status_box_className } key={ props.id }>
            <span className="title">Client Side Render</span>
            <span className="status">{ status }</span>
        </li>
    );
};

export default TestClientSideRender;