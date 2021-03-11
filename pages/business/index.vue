<template>
    <div>
        <h1>Business</h1>
        <div v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'programming-slug', params: { slug: article.slug } }">
                <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>{{ article.description }}</p>
            <p>Updated: {{ formatDate(article.updatedAt) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles/business')
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