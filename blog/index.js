import navbar from "../components/navbar.js";

document.title = "Blog";

async function postutil(path) {
    const post = (await import(`/blog/content/${path}.js`)).default
    
    return [post, `
        <div class="post">
            <div class="taglist">
                ${post.tags.map(tag => `<div class="tag"><a href=".?${tag}">${tag}</a></div>`).join("")}
            </div>
            <h3><a href="./view?${path}">${post.title}</a></h3>
            <p>${post.description}</p>
        </div>
    `];
}

const posts = [
    await postutil("helloworld")
];

const query = window.location.search.substring(1).replaceAll("%20", " ");

export default `
${navbar}
<div class="maincontent">
    ${
        window.location.search === "" 
            ? posts.map(post => post[1]).join("")
            : posts.filter(post => post[0].tags.includes(query))
                .map(post => post[1]).join("")

    }
</div>
`; 