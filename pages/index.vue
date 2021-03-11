<template>
    <div>
        <img class="col" src="/images/buddy_small.jpg" width="50%" alt="Picture of Buddy Williams" />
        <h1>Portfolio</h1>
        <p>
            This website was created to 
            <a href="/projects">showcase my projects</a> for those who 
            are interested in working with me. I also enjoy writing about 
            <a href="/programming">programming</a>, 
            <a href="/business">business</a>, and 
            <a href="/life">life</a>.
        </p>
        <p>I've been a software developer for twenty-one years! I've seen some things... You may be interested in some of these posts:</p>
        <div v-for="(article, index) of articles" :key="index">
            <NuxtLink :to="article.url">
                <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>{{ article.description }}</p>
            <p>
                <small>
                    Created {{ formatDate(article.createdAt) }} (last updated on {{ formatDate(article.updatedAt) }})
                </small>
            </p>
        </div>
        <p v-show="articles.length === 0">
            No posts yet.
        </p>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    async asyncData({ $content, params }) {
        let collection = [];
        ['business','life','programming','projects'].forEach(async subdir => {
            let articles = await $content(`articles/${subdir}`)
                .only(['title', 'description', 'img', 'slug', 'author', 'createdAt', 'updatedAt'])
                .sortBy('createdAt', 'desc')
                .fetch();
            console.log(subdir, articles);
            articles.forEach(article => {
                collection.push({
                    url: `/${subdir}/${article.slug}`,
                    ...article
                });
            });
        });
        collection = _.sortBy(collection, ['createdAt']).reverse();
        return { articles: collection };
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
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