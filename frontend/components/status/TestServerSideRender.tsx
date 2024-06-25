// Styling
import "./Test.style.css";

// Runtime Varibles
import ServerSideEndpoint from "@/runtime_variables/ServerSideEndpoint";

const TestServerSideRender = async ( props: { id:number } ) => {

    const pingBackend = async () => {
        let response = await fetch( ServerSideEndpoint + "/ping/backend/", { cache: "no-store" } );

        if ( response.ok ) {
            let status_responce = await response.json();
            if (status_responce?.Ping === "Pong") {
                return [ "Normal" , 0 ];
            }
        }
        return [ "Error"  , 1 ];
    };

    let [ status , code ] = await pingBackend();
    let status_box_className:string = "status-box ";
    if ( code ) { status_box_className += "error"; }

    return (
        <li className={ status_box_className } key={ props.id }>
            <span className="title">Server Side Fetch & Render</span>
            <span className="status">{ status }</span>
        </li>
    );

};

export default TestServerSideRender;