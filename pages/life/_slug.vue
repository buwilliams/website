<template>
    <slug :article="article" />
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles/life', params.slug).fetch()
        return { article }
    },

    head() {
        return {
            title: this.article.title + ' by Buddy Williams'
        };
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>