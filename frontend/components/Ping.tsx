// React Hooks
// import { useState } from "react";

// Styling
import "./Ping.style.css";

// Runtime Varibles
import BackendAPI from "@/runtime_variables/BackendAPI";

const Ping = async () => {

    const getStatus = async () => {
        let response = await fetch( BackendAPI + "/ping/" );
        let status_responce = await response.json();
        return status_responce?.Ping;
    };

    let status = await getStatus();
    
    return (
        <div className="ping">
            { "{ Ping: " + status + " }" }
        </div>
    );
};

export default Ping;