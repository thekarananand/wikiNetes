// Styling
import "./page.style.css";

// UI Components
import ArticleContent from "@/components/wiki/ArticleContent";

const html_content:string = `
<h3>Introduction</h3>

<p>
wikiNetes supports a subset of Markdown for text formatting. This is due to a custom Markdown to HTML logic designed to maintain accessibility, semantics, and readability. We are constantly working to improve our Markdown support. The list of supported formatting options is increasing, and new options will be added soon.
</p>

<hr/>

<p>
<strong> Following are the supported markdown formats: </strong> 
</p>

<h2>
Headings 
</h2>

<p>
Headings are used to define the structure and hierarchy of an article. To maintain a standard hierarchy, wikiNetes follows & recommends the following set of guidelines:
</p>

<ul>
<li>
<strong>Heading 1</strong>  is reserved for the Article Title. Please don't rewrite the Title inside Article Content Section. The Title and Metadata will be auto-generated at the top of the article.
</li>
<li>
<strong>Heading 2</strong>, <strong>Heading 3</strong> and <strong>Heading 4</strong> are available to the users, to define the hierarchy of the Content of the Article. 
</li>
</ul>

<p>
The Maping for the Headings and Markdown Syntax is as follows:
</p>

<table>
<tr>
<th>Headings</th>
<th>Markdown Syntax</th>
</tr>
<tr>
<td>Heading 2</td>
<td><code># heading</code></td>
</tr>
<tr>
<td>Heading 3</td>
<td><code>## heading</code></td>
</tr>
<tr>
<td>Heading 4</td>
<td><code>### heading</code></td>
</tr>
</table>

<h2>
Unordered Lists
</h2>

<p>
Unordered Lists used to create a list of items. Nested Unordered Lists are not supported, yet. The Following Syntax can be used to create an unordered list
</p>

<code class="block">
<div> - item 1 </div>
<div> - item 2 </div>
</code>

<h2>Inline Text Formatting</h2>

<p>
Inline Text Formatting is used to modify the appearance of a small portion of text. They are a great way to emphasize words or phrases within your writing. The Following Inline Text Formats are supported in WikiNetes:
</p>

<table>
<tr>
<th>Inline Formats</th>
<th>Markdown Syntax</th>
</tr>

<tr>
<td>Italic</td>
<td><code>*Important*</code></td>
</tr>

<tr>
<td>Bold</td>
<td><code>**Important**</code></td>
</tr>

<tr>
<td>Bold & Italic</td>
<td><code>***Important***</code></td>
</tr>

<tr>
<td>Inline Code / Monospaced</td>
<td><code>\`code\`<code></td>
</tr>
</table>

<h2>Code Block</h2>

<p>
Code Blocks are used to display snippets of code within your article. At this Moment, WikiNetes supports single line code block. Following is the Syntax for the same.
</p>

<code class="block">\`\`\` let wikiNetes = "Awesome"; \`\`\`</code>

<h2>Horizontal Rule</h2>

<p>
A Horizontal Rule represents a break between paragraph-level elements. Following is the Syntax for the same.
</p>

<code class="block">---</code>

<hr/>

<h3>Help us Build</h3>

<p>
We welcome code contributions from the community to help us build a better Markdown engine for wikiNetes. Please Visit Contribute Page.
</p>
`

export default function Page() {
    return (
        <main className="articleView">
            <ArticleContent
                title="wikiNetes ❤️ Markdown"
                author="Karan Anand"
                table_of_content={ [
                    "Introduction",
                    "Headings",
                    "Unordered Lists",
                    "Inline Formats",
                    "Code Block",
                    "Horizontal Rule",
                    "Help us build"
                ] }
                html_content={ html_content }
            />
        </main>
    );
}