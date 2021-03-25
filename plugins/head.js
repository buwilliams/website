export default function(title, description, img) {
    return {
        head() {
            return {
                title: title + ' by Buddy Williams',
                meta: [
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: title
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: description
                    },
                    {
                        hid: 'twitter:image',
                        name: 'twitter:image',
                        content: img
                    },
                    {
                        hid: 'twitter:image:alt',
                        name: 'twitter:image:alt',
                        content: title
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: title
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: description
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: img
                    },
                    {
                        hid: 'og:image:secure_url',
                        property: 'og:image:secure_url',
                        content: img
                    },
                    {
                        hid: 'og:image:alt',
                        property: 'og:image:alt',
                        content: title
                    }
                ]
            };
        }
    }
}