<template>
    <div>
        <header>
            <ul>
                <li>
                    <h3>Buddy Williams</h3>
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
            <hr/>
        </header>
        <div>
            <Nuxt />
        </div>
    </div>
</template>

<style lang="postcss">
html {
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #333;
}

header ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

header ul li {
    /*margin: 1rem 1rem 1rem 0;*/
    font-size: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
}

header ul li h3 {
    margin-top: auto;
    margin-bottom: auto;
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
</style>