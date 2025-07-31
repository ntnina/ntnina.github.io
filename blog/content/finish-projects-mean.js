import { autosplit2 } from "../utils.js";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const preRamble = autosplit2(`
    I wrote <a href=\"/blog/view?finish-projects\">a post about productivity</a>. And this post was based off of a productivity system that I wrote in a series of markdown files ages ago. But I felt this "nice version" lacked a lot of the character and tough love that my original markdown files had.

    These original ramblings were inspired by the writing style of Khatz. Someone who is a little "out there" when it comes to writing styles, and who hands out tough love in massive spoonfuls. If you're familiar with his works then you can probably see the inspiration for this system and where some of his lessons are "retold".

    So I just invite the reader to please consider this when reading this version. And, if they think it would be more helpful, <strong><a href="/blog/view?finish-projects">read the nicer version</a></strong>. This version was written by a younger version of me, who was inspired by a very particular sense of humour. This version was also never meant to see the light of day, it was actually for me to write a "nicer version" someday. <span class="spoiler">I think it shows, even the intro is sarcastic...
    Living abroad must have mellowed out that "harsh English sense of humour" some, lol.</span>

    The newer version also contains more up-to-date wisdom from my experiences (delving more into mental health and productivity). But I do think the harsh delivery and structure of this version makes it way more memorable. Remember, you (as a programmer, artist, human being, etc.) are valid - so when I write in a section to give up, don't take that at face value. It's shock value. 

    Without further ado...

    <hr />
`);

const stillRamble = await fetch("/blog/content/finish-projects-mean.md")
        .then(res => res.text())
        .then(raw => marked.parse(raw))

export default {
    tags: ["programming", "mental & social"],
    title: "How to finish projects&trade;, £15.99 edition",
    description: "My original musings on productivity - this is the mean version for people who like tough love. See <a href=\"/blog/view?finish-projects\">here</a> for a nicer version.",
    datetime: new Date("2025/07/31 19:00").toJSON(),
    edited: new Date("2025/07/31 19:00").toJSON(),
    content: preRamble + stillRamble
}