// Styling
import "./page.style.css";

// UI Components
import TestServerSideRender from "@/components/status/TestServerSideRender";
import TestClientSideRender from "@/components/status/TestClientSideRender";
import TestDBConnect        from "@/components/status/TestDBConnect";

export default function Home() {
    return (
        <main className="main">
            <h1 className="page-heading">Wikinetes</h1>
            <ul>
                <TestServerSideRender id={ 1 } />
                <TestClientSideRender id={ 2 } />
                <TestDBConnect        id={ 3 } />
            </ul>
        </main>
    );
}
