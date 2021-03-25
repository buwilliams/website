<template>
    <article>
        <h1>{{ article.title }}</h1>
        <p v-show="article.description">{{ article.description }}</p>
        <p>Updated: {{ formatDate(article.updatedAt) }}</p>
        <img v-show="article.img" :src="article.img" :alt="article.alt" />
        <nuxt-content :document="article" />
        <hr>
        <p>
            <small>
                Created {{ formatDate(article.createdAt) }} (last updated on {{ formatDate(article.updatedAt) }})
            </small>
        </p>
    </article>
</template>

<script>
import HeadFn from './head.js';
const title = 'Buddy Williams \' Resume';
const description = 'Career details in resume format.';
const img = '/android-chrome-192x192.png';
const Head = HeadFn(title, description, img);

export default {
    ...Head,

    async asyncData({$content, params}) {
        const article = await $content('resume').fetch()
        return { article }
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>