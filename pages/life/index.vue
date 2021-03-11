<template>
    <div>
        <h1>Life</h1>
        <div v-for="article of articles" :key="article.slug">
            <!--<img v-if="article.img" :src="article.img" :alt="article.alt" width="300" />-->
            <NuxtLink :to="{ name: 'life-slug', params: { slug: article.slug } }">
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
        const articles = await $content('articles/life')
            .only(['title', 'description', 'img', 'alt', 'slug', 'author', 'updatedAt'])
            .sortBy('createdAt', 'desc')
            .fetch();
        return { articles }
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>