<template>
    <div>
        <header>
            <ul>
                <li>
                    <h3>Buddy Williams</h3>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/programming">Programming</a>
                </li>
                <li>
                    <a href="/business">Business</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
            <hr/>
        </header>
        <div>
            <Nuxt />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
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
</style>