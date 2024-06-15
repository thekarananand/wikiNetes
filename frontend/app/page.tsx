import "./page.style.css";

// UI Components
import Ping from "@/components/Ping";
import Input from "@/components/Input";

export default function Home() {
    return (
        <main className="main">
            <h1 className="page-heading">Wikinetes</h1>
            <Ping/>
            <Input/>
        </main>
    );
}
