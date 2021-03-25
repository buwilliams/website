<template>
    <div>
        <h1>Programming</h1>
        <div v-for="article of articles" :key="article.slug">
            <!--<img v-if="article.img" :src="article.img" :alt="article.alt" width="300" />-->
            <NuxtLink :to="{ name: 'programming-slug', params: { slug: article.slug } }" class="article">
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
        title: 'Programming by Buddy Williams',
        description: 'List of programming articles',
        img: '/android-chrome-192x192.png'
    },

    async asyncData({ $content, params }) {
        const articles = await $content('articles/programming')
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