<template>
    <div>
        <h1>Business</h1>
        <div v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'business-slug', params: { slug: article.slug } }" class="article">
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
import HeadFn from '../head.js';
const title = 'Business by Buddy Williams';
const description = 'List of articles on business';
const img = '/android-chrome-192x192.png';
const Head = HeadFn(title, description, img);

export default {
    ...Head,

    async asyncData({ $content, params }) {
        const articles = await $content('articles/business')
            .only(['title', 'description', 'img', 'slug', 'author', 'createdAt', 'updatedAt'])
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