"use client";

// Next Components
import Link  from "next/link";
import Image from "next/image";

// Styling
import "./Header.style.css";

// Runtime Varibles
import ColorScheme from "@/runtime_variables/ColorScheme";

// UI Components
import Logo from "@/components/common/Logo";

const Header = () => {

    // const [ ColorScheme, setColorScheme ] = useState("light")

    // const SwitchColorScheme = () => {
    //     if (ColorScheme === "light") { ColorScheme = "dark"; }
    //     else if (ColorScheme === "dark") { ColorScheme = "light"; }
    // };

    return (
        <header className="header">
            <div className="first_nav">
                <Link href='/'>
                    <Logo />
                </Link>
            </div>  

            <div className="second_nav">
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/contribute/'>Contribute</Link>
                        </li>
                        {/* <li>
                            <button onClick={ SwitchColorScheme }
                            >Darkmade</button>
                        </li> */}
                    </ul>
                </nav>
            </div>  
        </header>
    );
};

export { Header, ColorScheme };