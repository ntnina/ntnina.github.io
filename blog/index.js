import * as list from "./list.mjs";
const posts = Object.values(list);
import navbar from "../components/navbar.js";

function postutil(post) {
    const filename = post.url.substring(post.url.lastIndexOf('/') + 1).replace(".mjs", "");
    
    return `
        <div class="post">
            <div class="taglist">
                ${post.tags.map(tag => `<div class="tag"><a href=".?${tag}">${tag}</a></div>`).join("")}
            </div>
            <h3><a href="./view?${filename}">${post.title}</a></h3>
            <p>${post.description}</p>
        </div>
    `;
}

document.title = "Blog";

const query = window.location.search.substring(1).replaceAll("%20", " ");

export default `
${navbar}
<div class="maincontent">
    ${
        window.location.search === "" 
            ? posts.reverse().map(post => postutil(post)).join("")
            : posts.reverse().filter(post => post.tags.includes(query))
                   .map(post => postutil(post)).join("")
    }
</div>
`; 
