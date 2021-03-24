<template>
    <div class="slideshow">
        <div class="image">
            <img :src="current.url" :alt="current.description"/>
            <div class="desc">{{ current.description }}</div>
        </div>
        <div class="nav clearfix">
            <a class="prev" href="#" @click.prevent="prev">Prev</a>
            <span class="summary">{{ summary }}</span>
            <a class="next" href="#" @click.prevent="next">Next</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentImage: 0,
            images: [
                { 
                    url: '/images/bliss/bliss1.png',
                    description: 'Bliss UI interface',
                },
                { 
                    url: '/images/bliss/bliss_menu1.png',
                    description: 'Menu for managing projects and deployments',
                },
                { 
                    url: '/images/bliss/bliss_menu2.png',
                    description: 'Menu to configure global app settings',
                },
                { 
                    url: '/images/bliss/bliss_js_editor.png',
                    description: 'JavaScript editor',
                },
                { 
                    url: '/images/bliss/bliss_data.png',
                    description: 'State manager',
                },
                { 
                    url: '/images/bliss/bliss_modules.png',
                    description: 'Supports NPM modules',
                }
            ]
        }
    },

    computed: {
        current() {
            return this.images[this.currentImage];
        },

        summary() {
            return this.currentImage + 1 + " of " + this.images.length;
        }
    },

    methods: {
        next() {
            this.currentImage = (this.currentImage + 1) >= this.images.length ? 0 : this.currentImage + 1;
        },

        prev() {
            this.currentImage = (this.currentImage - 1) < 0 ? this.images.length - 1 : this.currentImage - 1;
        }
    }
}
</script>

<style>
.slideshow {
    background-color: #ededed;
    padding: 1rem;
    border-radius: 0.5rem;
}

.slideshow h2 {
    margin: 0.25rem 0;
}

.desc {
    margin-top: 1rem;
    text-align: center;
}

.nav {
    margin-top: 1.5rem;
    font-size: 0.75rem;
}

.prev {
    float: left;
    width: 10%;
    text-transform: uppercase;
}

.next {
    float: right;
    width: 10%;
    text-align: right;
    text-transform: uppercase;
}

.summary {
    float: left;
    text-align: center;
    width: 80%;
}
</style>