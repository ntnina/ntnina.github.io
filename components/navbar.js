const quotes = [
    ["John quote", "Nina, 2025"],
];

const quote = quotes[Math.floor(quotes.length * Math.random())];

export default `
    <div class="navbar">
        <div>
            <img width="150" height="150" id="profilepicture" src="https://github.com/ntnina.png">
            <p class="quote">"<em>${quote[0]}</em>"</p>
            <p> - ${quote[1]}</p>
        </div>

        <nav>
            <a href="/">Home</a>
            <a href="/blog">Blog</a><span id="rss">(<a href="https://github.com/ntnina/ntnina.github.io/commits/main.atom">feed</a>)</span>
        </nav>
    </div>
`;