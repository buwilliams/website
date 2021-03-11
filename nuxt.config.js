export default {
    ssr: false,
    target: 'static',
    head: {
        title: 'Buddy Williams',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css',
            }
        ]
    },
    css: [],
    plugins: [],
    components: true,
    buildModules: [],
    modules: ['@nuxt/content'],
    build: {
        transpile: []
    },
    dir: {
        pages: 'pages',
        layouts: 'layouts'
    },
    server: {
        port: 3000,
        timing: false
    },
    buildDir: 'dist'
};