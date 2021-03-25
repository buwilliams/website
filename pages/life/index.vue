<template>
    <div>
        <h1>Life</h1>
        <div v-for="article of articles" :key="article.slug">
            <!--<img v-if="article.img" :src="article.img" :alt="article.alt" width="300" />-->
            <NuxtLink :to="{ name: 'life-slug', params: { slug: article.slug } }" class="article">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p>Created: {{ formatDate(article.createdAt) }}</p>
            </NuxtLink>
        </div>
        <p v-show="articles.length === 0">
            No posts yet.
        </p>
    </div>
</template>

<script>
export default {
    staticHead: {
        title: 'Life by Buddy Williams',
        description: 'List of articles on life',
        img: '/android-chrome-192x192.png'
    },

    async asyncData({ $content, params }) {
        const articles = await $content('articles/life')
            .only(['title', 'description', 'img', 'alt', 'slug', 'author', 'createdAt', 'updatedAt'])
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