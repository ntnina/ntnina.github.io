import navbar from "../../components/navbar.js";

document.title = "Blog";

const postid = window.location.search.substring(1);
const post = import(`/blog/content/${postid}.js`);

export default `
${navbar}

<div class="maincontent">
    <div class="taglist">
        ${(await post).default.tags.map(tag => `<div class="tag"><a href="../?${tag}">${tag}</a></div>`).join("")}
    </div>
    <p>Posted: ${(await post).default.datetime} - Last edited: ${(await post).default.edited}</p>
    <h2>${(await post).default.title}</h2>
    <p><em>${(await post).default.description}</em></p>

    <hr />

    <article>
        ${(await post).default.content}
    </article>
</div>
`;