// Next Components
import Link  from "next/link";
import Image from "next/image";

// Fonts
import { inter } from "@/fonts/Inter";

// Styling
import "./page.style.css";

// UI Components
import ListArticles from "@/components/index/ListArticles";

export default function Page() {
    return (
        <main className="home">
            <section className="hero">
                <div className="grid-wrapper">
                    <span>Welcome to wikiNetes</span>
                    <h1>
                        Leverage the<br />
                        Power of Knowledge.
                    </h1>
                    <form action="">
                        <input type="text" name="" id="" className={ inter.className } placeholder="Search WikiNetes..."/>
                        <input type="submit" value="Search" className={ inter.className }/>
                    </form>
                </div>
            </section>

            <ListArticles/>
        </main>
    );
}