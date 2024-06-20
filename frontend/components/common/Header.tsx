// Next Components
import Link  from "next/link";

// Styling
import "./Header.style.css";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href='/'>Wikinetes</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;