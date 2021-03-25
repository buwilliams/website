export default {
    head() {
        return {
            title: this.article.title + ' by Buddy Williams',
            meta: [
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.article.title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.article.description
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: this.article.img
                },
                {
                    hid: 'twitter:image:alt',
                    name: 'twitter:image:alt',
                    content: this.article.title
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.article.title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.article.description
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.article.img
                },
                {
                    hid: 'og:image:secure_url',
                    property: 'og:image:secure_url',
                    content: this.article.img
                },
                {
                    hid: 'og:image:alt',
                    property: 'og:image:alt',
                    content: this.article.title
                }
            ]
        };
    }
}