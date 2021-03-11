<template>
    <div>
        <img class="col" src="/images/buddy.jpg" width="50%" alt="Picture of Buddy Williams" />
        <h1>Portfolio</h1>
        <p>
            This website was created to 
            <a href="/projects">showcase some of my work</a> for those who 
            are interested in working with me. I also enjoy writing about 
            <a href="/programming">programming</a>, 
            <a href="/business">business</a>, and 
            <a href="/life">life</a>.
        </p>
        <p>I've been a software developer for 21 years! I've seen some things... You may be interested in some of these posts:</p>
        <div v-for="(article, index) of articles" :key="index">
            <NuxtLink :to="getUrl(article.path)">
                <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>{{ article.description }}</p>
            <p>Updated: {{ formatDate(article.updatedAt) }}</p>
        </div>
        <p v-show="articles.length === 0">
            No posts yet.
        </p>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles', { deep: true })
            .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
            .sortBy('createdAt', 'desc')
            .fetch();
        console.log(articles);
        return { articles }
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },

        getUrl(path) {
            return path.replace('/articles', '');
        }
    }
}
</script>

<style lang="postcss" scoped>
.col {
    float: right;
    width: 45%;
    margin-left: 1rem;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>