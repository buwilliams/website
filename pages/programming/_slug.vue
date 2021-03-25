<template>
    <slug :article="article" />
</template>

<script>
import Head from '../slug_head.js';

export default {
    ...Head,

    async asyncData({ $content, params }) {
        const article = await $content('articles/programming', params.slug).fetch()
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