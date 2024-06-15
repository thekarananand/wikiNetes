"use client";

// React Hooks
import { useState, useEffect } from "react";

// Styling
import "./Input.style.css";

// Runtime Varibles
import BackendAPI from "@/runtime_variables/BackendAPI";

const Input = () => {

    let [res, setRes] = useState("{}");
    let [input, setInput] = useState("");

    useEffect( () => {
        const getInputValue = async () => {
            let response = await fetch( BackendAPI + "/input/");
            let value_responce = await response.json();
            setInput(value_responce?.Value);
        };

        getInputValue();
    }, []);

    const sendResponse = async () => {
        let response = await fetch( BackendAPI + "/input/",  {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                Input: input
            })
        });

        let input_responce = await response.json();

        setRes(`{ Input: ${input_responce?.Input} }`);
    };

    return (

        <div className="ping">
            <div className="form">
                <input
                    name="Input"
                    type="text"
                    value={ input }
                    onChange={
                        (e) => setInput(e.target.value)
                    }/>
                <button 
                    onClick={ sendResponse }
                >Send</button>
            </div>

            { res }
        </div>
    );

};

export default Input;