import StaticHead from './static_head.js';
import _ from 'lodash';

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
    modules: [
        '@nuxt/content',
        '@nuxtjs/sitemap'
    ],
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
    buildDir: 'dist',
    generate: {
        async routes () {
            const { $content } = require('@nuxt/content');
            let files = await $content({ deep: true }).fetch()
            files = _.filter(files, file => file.path.indexOf('/drafts') === -1);
            return files.map(file => file.path === '/index' ? '/' : file.path.replace('/articles', ''));
        }
    },
    hooks: {
        'generate:page': function({ route, path, html }) {
            const static_pages = ['/', '/business', '/life', '/programming', '/projects'];
            StaticHead(static_pages, route, path, html);
        }
    },
    sitemap: {
        hostname: 'https://www.buddywilliams.dev',
        gzip: true,
        async routes () {
            const { $content } = require('@nuxt/content');
            const files = await $content({ deep: true }).only(['path']).fetch()
            return files.map(file => file.path === '/index' ? '/' : file.path.replace('/articles', ''))
        }
    },
};