<template>
    <article>
        <h1>{{ article.title }}</h1>
        <code v-show="article.description">
            {{ article.description }}
        </code>
        <img v-show="article.img" :src="article.img" :alt="article.alt" class="header-image" />
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
export default {
    props: {
        article: {
            type: Object,
            default: () => {}
        }
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style>
.header-image {
    margin-top: 1rem;
}
</style>