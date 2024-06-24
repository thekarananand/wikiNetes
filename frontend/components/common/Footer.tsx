// Next Components
import Link  from "next/link";

// Styling
import "./Footer.style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li>
                        <Link href={ "/status/" }>Status</Link>
                    </li>
                    <li>
                        <Link href={ "/md/" }>Markdown</Link>
                    </li>
                    <li>
                        <Link href={ "https://github.com/thekarananand/wikiNetes/" }>GitHub</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;