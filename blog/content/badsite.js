import { autosplit } from "../utils.js";

export default {
    tags: ["programming", "web development"],
    title: "Why this website is bad",
    description: "A discussion on my woes with frontend frameworks and web development and how I built this site.",
    datetime: new Date().toJSON(),
    edited: new Date().toJSON(),
    content: autosplit(`
Last night something truly horrifying happened.

I was called a web developer.

This made me think for a little bit. A lot of the things I work on are for friends who are wanting to build websites. But I don't actually build a lot of websites. And it shows...

I wanted to dedicate this post as to <em>why</em> I don't build a lot of websites. Why this site in particular, sucks.

<h2>My history with web development</h2>
I started learning basic HTML and CSS at school. At the time the idea of teaching technical skills at school was just gaining traction, as the education system had only <em>just</em> realised that technical skills weren't just for Computer Scientists. 

As a grew up though, I quickly out-paced the education system. I learned JavaScript long before they taught us it in class and, eventually, the need for an easier way to develop apps became apparent. As a result, I started to look into frontend frameworks. I went from Svelte to React, back to Svelte, back to React, looked at Vue for a bit. Then went back to React...

Each time I had the same issue, though. That was there was a need for NPM and a large chunk of storage on my shitty laptop. The state of web development was messy - a landscape of new frameworks, and constantly deprecated APIs.

I got into learning C and then Rust. I didn't need, nor want, to do any sort of JavaScript development ever again. 

...But it was hard to get rid of JavaScript entirely. It's a high level language that is avaliable on pretty much any platform nowadays. Writing your apps as web apps generally means that you get multi-platform support for free.

Largely the web hasn't changed since my initial dabblings. Frontend frameworks still use NPM and still have Megabytes of dependencies. Preact, which is known for being "small", is still 1.44MB. Most other frameworks have loads of dependencies. There's still a bunch of APIs that get deprecated for, largely, no good reason - backwards compatibility be damned! And loads of proposed APIs that haven't been widely implement for <em>years</em>.

Recently I've needed to leverage the web's wide reach to make some utility applications. And this led me down the rabbit hole of developing my own personal tools to make developing websites. 

<h3>Make your own damn framework</h3>
The main benefit of me making my own framework(s) is that I only have to include what I'm going to use. 

One of the reasons that frameworks are so large is because they have to cover every possible use case for a frontend framework. My apps just needed a little bit of state and automatic rerendering. So I only had to include enough information for that.

DIY loses convenience but gains on size (and dependence on NPM). But, when it came time to build this website I decided to try something different.

<h2>How I built this website</h2>
After getting used to C and Rust, I've come to appreciate how clean developing for those languages is. When you have a new React application, right from the start you have multiple folders and files. Most web-dev projects that I've seen have an unholy amount of files. And that is because the developer environment is usually equally as messy - there's tools, and tools for the tools, all to make development "easier".

Even in basic HTML/CSS/JS you get quite a lot of clutter.

So, when developing this website, I decided I'll just not deal with it. :3

<h3>Why this website is bad</h3>
The way I got around the website clutter is by abusing JavaScript template strings and the 404 page.

Believe it or not, this website is a single page app. It is a single 404 page. 

The 404 page is powerful because it will run at any page that you put into the search bar. But it will keep the contents of the search bar intact. 

And so, the jank begins.

The general premise is that the value in the address bar is used to index which JavaScript file the browser should dynamically load. If it fails to load a valid file then it will display a normal 404 page. If it succeeds, however...

...Then it will look at the default export for that file, and display whatever content is in that default export as the innerHTML.

Each "page" just returns an evaluated template string. Which is awesome, because it means I have reusable components if I just import the component and \$\{component-name\} it inside the template string! 

It also means I can do things like dynamically fetch posts.

<h3>The downside</h3>
The downside is that this is an awful approach. Everything is slow as hell and the web server has to send a bunch of JavaScript in order for a single sub-page to load.

But, I'm hosting on Github Pages. So I don't care, this is free. And, this is a personal blog for me to share random stuff - it's mostly static content that I'm sure (hope) the end user doesn't mind waiting a <em>little</em> longer to see.

<h2>P.S.</h2>
This is the end of the post. You can go home now.

Unless you want to hear a little bit more yapping.

This was my first post and, after writing it, I feel like it was kind of underwhelming. I'm going to continue posting various topics, but I think it'll take me a little bit to "find my voice".
    `)
};