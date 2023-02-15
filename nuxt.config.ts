// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/css/style.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vuetify"],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/tailwindcss',
    ],

    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },

    typescript: {
        strict: true
    },
})
