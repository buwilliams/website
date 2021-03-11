<template>
    <article>
        <h1>{{ article.title }}</h1>
        <p v-show="article.description">{{ article.description }}</p>
        <p>Updated: {{ formatDate(article.updatedAt) }}</p>
        <img v-show="article.img" :src="article.img" :alt="article.alt" />
        <!--
        <nav>
            <ul>
                <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                </li>
            </ul>
        </nav>
        -->
        <nuxt-content :document="article" />
        <!--
        <hr/>
        <author :author="article.author" />
        -->
    </article>
</template>

<script>
export default {
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