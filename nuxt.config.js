export default {
    ssr: false,
    target: 'static',
    head: {
        title: 'Buddy Williams',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { 
                charset: 'utf-8' 
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { 
                hid: 'description',
                name: 'description',
                content: 'Buddy Williams\' Portfolio'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            },
            {
                href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                rel: "stylesheet"
            },
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