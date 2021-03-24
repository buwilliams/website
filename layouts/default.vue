<template>
    <div>
        <header>
            <ul>
                <li>
                    <h3><img class="logo" src="/favicon-32x32.png"> Buddy Williams</h3>
                </li>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects">Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/programming">Programming</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/business">Business</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/life">Life</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/resume">Resume</NuxtLink>
                </li>
            </ul>
            <div>
                <p class="text-center">
                    Part-time mad computer scientist, full-time lover of the extraordinary.
                </p>
                <hr>
            </div>
        </header>
        <div>
            <Nuxt />
        </div>
    </div>
</template>

<style lang="postcss">
:root {
    --light-bg: #fff;
    --light-fg: #333;
    --light-nav-bg: #f7f7f7;
    --light-link-fg: #0076d1;
    --light-link-hover-fg: #0076d1;

    --dark-bg: #333;
    --dark-fg: #fff;
    --dark-nav-bg: #292929;
    --dark-link-fg: rgb(163 163 255);
    --dark-link-hover-fg: rgb(114, 114, 255);
}

.text-center {
    text-align: center;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: var(--light-bg);
    color: var(--light-fg);
}

.logo {
    width: 1.17em;
    height: 1.17em;
    margin-bottom: -0.25em;
    margin-right: 0.25em;
}

header ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: var(--light-nav-bg);
    border-radius: 0.5rem;
    padding: 1rem;
}

header ul li {
    font-size: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
}

header ul li h3 {
    margin-top: auto;
    margin-bottom: auto;
}

a.article {
    color: inherit;
    text-decoration: none;
}

a.article:hover {
    color: inhert;
    text-decoration: none;
}

a.article h2 {
    color: var(--light-link-fg);
    text-decoration: none;
}

a.article:hover h2 {
    color: var(--light-link-hover-fg);
    text-decoration: underline;
}

@media only screen and (max-width: 1100px) {
    header ul {
        display: block;
    }

    header ul li a {
        display: inline-block;
        margin: 0.2rem 0;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: var(--dark-bg);
        color: var(--dark-fg);
    }

    a {
        color: rgb(163 163 255);
        text-decoration: none;
    }

    a:hover {
        color: var(--dark-link-hover-fg);
        text-decoration: underline;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--dark-fg);
    }

    header ul {
        background-color: var(--dark-nav-bg);
    }

    a.article h2 {
        color: var(--dark-link-fg);
        text-decoration: none;
    }

    a.article:hover h2 {
        color: var(--dark-link-hover-fg);
        text-decoration: underline;
    }
}
</style>