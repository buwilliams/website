<template>
    <slug :article="article" />
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles/business', params.slug).fetch()
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