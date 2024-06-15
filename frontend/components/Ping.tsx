"use client";

// React Hooks
import { useState } from "react";

// Styling
import "./Ping.style.css";

// Runtime Varibles
import BackendAPI from "@/runtime_variables/BackendAPI";

const Ping = () => {

    let [status, setStatus] = useState("Error");

    const getStatus = async () => {
        let response = await fetch( BackendAPI + "/ping" );
        let status_responce = await response.json();
        setStatus(status_responce?.Ping);
    };

    getStatus();
    
    return (
        <div className="ping">
            { "{ Ping: " + status + " }" }
        </div>
    );
};

export default Ping;