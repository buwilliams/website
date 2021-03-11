<template>
    <div>
        <h1>Recent Posts</h1>
        <div v-for="(article, index) of articles" :key="index">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
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