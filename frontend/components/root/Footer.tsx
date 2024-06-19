// Next Components
import Link  from "next/link";

// Styling
import "./Footer.style.css";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link href='/status/'>Status</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;