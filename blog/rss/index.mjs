import * as list from "../list.mjs"; 
const posts = Object.values(list).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
import fs from "fs";

const sanitise = (s) => s
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;");
                    


// Building feed
const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
    <title>Nina's blog</title>
    <link>https://ntnina.github.io</link>
    <description>The mad ramblings of a silly lil girl</description>
    ${posts.map(post => `
    <item>
        <title>${sanitise(post.title)}</title>
        <link>https://ntnina.github.io/blog/view?${post.url.substring(post.url.lastIndexOf('/') + 1).replace(".mjs", "")}</link>
        <description>${sanitise(post.description)}</description>
        <pubDate>${new Date(post.datetime).toUTCString()}</pubDate>
    </item>`
    ).join("").trim()}
</channel>

</rss>`;

fs.writeFileSync("./blog/rss/feed.xml", xml, "utf8");
