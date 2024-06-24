// Next Components
import Link  from "next/link";

// Styling
import "./page.style.css";

export default function Page() {
    return (
        <main>
            <ul>
                <li>
                    <Link href={ "/contribute/new/" }>
                        Share Your Knowledge: Write a New Article
                    </Link>
                </li>
                <li>
                    <Link href={ "/https://github.com/thekarananand/wikiNetes/" }>
                        Help Us Build: Contribute Code
                    </Link>
                </li>
                <li>
                    <Link href={ "/https://github.com/thekarananand/wikiNetes/" }>
                        Report a Bug or Suggest a Feature:
                        Raise an Issue on GitHub
                    </Link>
                </li>
            </ul>
        </main>
    );
}
