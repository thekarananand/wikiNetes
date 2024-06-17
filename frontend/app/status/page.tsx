// Styling
import "./page.style.css";

// UI Components
import TestServerSideRender from "@/components/status/TestServerSideRender";
import TestClientSideRender from "@/components/status/TestClientSideRender";
import TestDBConnect        from "@/components/status/TestDBConnect";

export default function Page() {
    return (
        <main className="main">
            <h1 className="page-heading">Current Status</h1>
            <ul className="grid">
                <TestServerSideRender id={ 1 } />
                <TestClientSideRender id={ 2 } />
                <TestDBConnect        id={ 3 } />
            </ul>
        </main>
    );
}
