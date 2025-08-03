import autosplit from "../autosplit.mjs";

export default {
    url: import.meta.url,
    tags: ["programming", "mental & social", "productivity"],
    title: "How to finish projects - the \"cure to laziness\"&trade;, now only $2.99",
    description: "A deep dive into a very lazy person's method of getting herself to be less lazy - this is the cleaner, nicer, version. See <a href=\"/blog/view?finishprojectsmean\">here</a> for the <em>slightly</em> mean version.",
    datetime: new Date("2025/07/31 15:14").toJSON(),
    edited: new Date("2025/07/31 15:14").toJSON(),
    content: autosplit(`
Most people I know — including me — struggle to finish projects.

I used to joke about it. Then I realised I’d spent years starting and abandoning things. The pattern wasn’t funny anymore. So I built a system that finally worked for me — not some rigid productivity framework, but something personal, flexible, and kind.

<h2>The requirements (why nothing else worked)</h2>
I've attempted to make myself more productive in the past too. Hidden behind those self-deprecating jokes was a genuine want to finish my projects. I tried <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">pomodoro</a>, <a href="https://en.wikipedia.org/wiki/Timeboxing">timeboxing</a>, <a href="https://en.wikipedia.org/wiki/Kanban_(development)">kanban</a>, regular schedules, basically everything else under the sun. 

The way I found success in my other hobbies was through keeping a level of <em>obsession</em>. But this usually isn't very sustainable. 

My previous attempts had given me some solid lessons:
<ol>
    <li>I don't do well with "fixed time" method (schedules)</li>
My life is unpredictable. At university I didn't know what I was really going to do in a given day until I went through the motions. At home, I didn't know what time I would wake up. <span class="spoiler">For mental health reasons regulating these things was particularly hard, but I still worked through them.</span>

    <li>I like the freedom to go into a "flow state"</li>
This is what timeboxing and pomodoro didn't allow for - it's great for tasks where I'm not going into flow. But it's horrible once I get into flow, because I'll be forced to take a break.

    <li>I need the system to be general enough to allow for a wide variety of tasks</li>
Some systems are very "task limited". In that they are suited for a specific type of task (usually ones that are very time-measurable with a well defined end point). To a certain extent you can't really escape this. You're always going to need to have some limitations. But if you work on a lot of things that don't really have an end (e.g. art) then you might enjoy a more generalised system.
</ol>

<h2>The system - the "lazy-girl productivity syastem"</h2>
I was going to charge $2.99, but just for you, I'll give it for free.

The system that I came up with was effectively a TODO list that followed <em>strict rules</em> and a reframing of my mindset when it came to projects.

This will be in the context of Computer Science, since I think it works best in that context. But I started using this system to also make myself more productive at reading! So it can probably be adapted to anything.

I'll present these in the context of "stages" of increasing "difficulty". So, stage one is the easiest to implement and 

<h3>Stage one: When</h3>
We're going to be making TODO lists. And a lot of them. But <em>when do we make them</em>?

Before we sleep! Before you go to bed, write what you want to achieve tomorrow on a bit of paper. <strong>Then place this paper somewhere where you're going to see it tomorrow.</strong> I usually put it on my keyboard.

Think of it like a "promise to future me".

For some people just doing this is already enough to get them organised. I'm on another level of laziness though so I had to introduce more rules...

<h3>Stage two: How to write goals</h3>
Writing a checklist item in itself is a hard task. It is easy to be too vague or ambitious. I'll give an example.

I want to finish a project. So I write on my little paper

<pre><code>
[ ] Work on project
</code></pre>

Fine, right? <strong>Wrong</strong>. The ground will open up and swallow me whole because this item <strong>sucks</strong>. 

What counts as "work"? What is enough "work" to complete this item? I'm left with all these questions, but no answers. As a result, it's easy for me to lie to myself ("I planned some stuff for the project, that counts as work") or to do the opposite and not count certain things as work ("I know I wrote the entire frontend, but if you think about it that doesn't count, I'm a failure").

This is madness! So I made a very clear rule to help you write items that are clear and won't lead to burnout. 

<strong><em>Only write goals that are small winnable games</em></strong>.

A small winnable games means <em>clear goals</em> with a <em>specific</em> and <em>relatively easy to achieve</em> end point.

It means turning

<pre><code>
[ ] Work on project
</code></pre>

Into

<pre><code>
[ ] Work on frontend
[ ] Work on backend
</code></pre>

Then into

<pre><code>
[ ] Work on navbar component
[ ] Work on navbar css
[ ] Work on article JS
[ ] Work on article CSS
...
</code></pre>

Until you decompose each item so much that it seems laughably small. 

But being laughably small means they're laughably easy to achieve and you get that dopamine hit laughably quickly.

It's hard to do this, for some repetitive tasks I still struggle to break them down to a point where it's reasonable. I am guilty of writing just "read" as an item. Or "anki". But, where possible, use decomposition! 

Turn big monoliths into small, winnable games. And then go win them! 

<h3>Stage three: How to manage expectations</h3>
This part goes beyond just writing your TODO list.

Managing expectations is important because, even if you're super productive, if you expect too much from yourself you're going to burn out. 

You probably aren't the best programmer in the world. So don't expect to see results that take full teams years to achieve.

Start projects with a small scope. You'll kick and scream, "I can do more than this". But even the smallest projects have scopes that grow far <em>far</em> beyond what you could expect. Some of my weekend projects have managed to engulf me whole for weeks. But starting with a small scope makes it easier for you to finish writing something useful and "complete" <em>before</em> you feel the need to step back and start a new project.

(Sadly this isn't possible for all projects. Looking at you game developers. Even the most simple project is complicated when you're a  developer).

For more complicated projects you need to set your expectations realistic. Think of the shittiest, minimum viable version of your project and aim to get that done first. For a lot of projects the last 1% is the 99% - that is to say that you can spend months and months on just polish, long after the "core" is finished. So get the "core" out of the way and at least you'll have something that is done.

You can use your history of progress as a "anchor for realism". If it takes me a month to read a book, I shouldn't expect to suddenly get it done in a day.

<h3>Stage four: How to be kind to yourself</h3>
It helps to give yourself a treat for doing a good job. Or just some form of "longer term dopamine". 

The easiest way to do this is to give yourself a damn treat! Have a nice drink, bit of chocolate, etc. 

To me, though this can feel fake and manufactured. Since I was collecting the sheets on bits of paper I thought of something else I could do: streaks.

Not in the cringe snapchat kind. But using a similar philosophy. Collecting the sheets which had all items complete on them was very rewarding. I got to see a pile of paper grow. When I was feeling down, I'd leave the bound paper on my keyboard to remind myself how far I had come.

But, eventually, I hit a part of super bad mental health. I'll probably write a separate post about it at some point. But it was the kind of hole that hit me deep, and left me in bed for a few days. For this I came up with something a bit creative, but hard.

I had to write a letter to "tomorrow me" alongside the task list. For positive reinforcement and motivation. It required me to do something that I'm not used to - which is giving myself a break and actually being positive about myself. I had to praise myself for doing less work, madness! 

<h3>Stage five: How to deal with mental health (in the context of productivity)</h3>
Your personal mental health will have an effect on your productivity. Mental health as a whole is too big of a topic for me to cover <em>everything</em> so I'll cover what I did during that summer to deal with poor mental health.

The first was to have "alternative"/"conditional" items to the TODO lists. It helped to pre-plan things that made me feel better so that I didn't have to think of them mid-crisis. Usually this would look like:

<pre><code>
If in crisis:
[ ] Make a hot chocolate
[ ] Grab fluffy blanket
[ ] Grab plushie
[ ] Listen to Pinna Park from Super Mario Sunshine
</code></pre>

Don't worry about how weird the things are that help you. The important thing is that they help <em>you</em>. This is <em>your</em> TODO list. 

Sometimes I knew that doing a certain task might be "too much". In this case I gave myself two tasks that I could pick between. For me it was always the reading tasks that were like this, since I didn't know what I really wanted to read until I sat down to read.

<pre><code>
[ ] Read - [ ] Light novel (2 chapters)
           OR
           [ ] Programming blog post
</code></pre>


<h3>Unanswered questions</h3>
This system isn't bullet proof and I'm not going to pretend it is. No system is a miracle system. But, to me, this is better than a calendar schedule (yuck!).

Here are some of the questions that I'm still figuring out with the system.

<h4>How to deal with burnout</h4>
Burnout is real and brutal. This system motivated me to do a <em>lot</em> in a really small amount of time, which means I eventually burnt out. I haven't managed to work out a great way to deal with this other than reducing the amount of items in a given day.

Prolonged mental health issues. This system requires a certain "willpower input" which, after dealing with mental health issues for a prolonged time can be hard to come by. This system also operates a lot on inertia. Stopping is death, because you have to push yourself out of a neutral position. Always "going" is much easier, but obviously not if you're depressed. 

<h4>How to regain momentum after losing it</h4>
This is the one that I'm currently struggling with quite a lot. I lost a large part of my momentum with most things a few weeks ago and can't seem to get back to the same speed that I was once at.

<h2>"This was great, but it feels a little... off?"</h2>
I agree. This was originally based off a <a href=\"/blog/view?finishprojectsmean\">much harsher, more detailed, and to-the-point collection of markdown files</a> that I wrote after my first year of university. 

This version, in comparison, is much nicer but doesn't have the same "punch" that my original writings had. 

If you think you are in the mental headspace to deal with a bit of harsh British sarcasm, then please read it. Otherwise please don't read it - I don't want to accidentally offend people. I think the advice is solid but it isn't worth discouraging yourself over if you aren't in the correct headspace.

<h2>Thanks for reading :3</h2>
    `)
};
