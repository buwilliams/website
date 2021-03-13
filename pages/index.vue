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
        <div v-for="article in articles" :key="article.path">
            <NuxtLink :to="article.path" class="article">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p>
                    <small>
                        Created {{ formatDate(article.createdAt) }} (last updated on {{ formatDate(article.updatedAt) }})
                    </small>
                </p>
            </NuxtLink>
        </div>
        <p v-show="articles.length === 0">
            No posts yet.
        </p>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    data() {
        return {
            articles: []
        };
    },

    async asyncData({ $content, params }) {
        let articles = await $content('articles', { deep: true })
            .only(['title', 'description', 'img', 'slug', 'author', 'createdAt', 'updatedAt', 'path'])
            .sortBy('createdAt', 'desc')
            .limit(50)
            .fetch();

        articles = _.each(articles, article => {
            article.path = article.path.replace('/articles', '');
        });

        console.log('articles', articles);

        return { articles };
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

a.article {
    color: inherit;
    text-decoration: none;
}

a.article:hover h2 {
    text-decoration: underline;
}
</style>