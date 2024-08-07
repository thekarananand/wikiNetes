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
                        <Link href={ "/md/" }>Markdown Support</Link>
                    </li>
                    <li>
                        <Link
                            href={ "https://github.com/thekarananand/wikiNetes/" }
                            target="_blank"
                        >GitHub</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;