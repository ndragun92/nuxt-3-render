// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        // prerender: {
        //     routes: [ '/prerender' ]
        // },
        routeRules: {
            // '/': { prerender: true }, // Once per build (via builder)
            // '/blog/*': { static: true }, // Once on-demand per build (via lambda)
            // '/stats/*': { swr: '10 min' }, // Once on-demand each 10 minutes (via lambda)
            '/client': { ssr: false }, // Client-Side rendered
            '/redirect': { redirect: 'https://google.com' }, // Redirect Rules
            "/prerender": { prerender: true }, // Once on-demand each 10 minutes (via lambda)
            "/swr": { swr: 2 }, // Once on-demand each 10 minutes (via lambda)
            "/swr-test": { swr: 2 }, // Once on-demand each 10 minutes (via lambda)
            "/swr2": { swr: true }, // Once on-demand each 10 minutes (via lambda)
            "/static": { static: true }, // Once on-demand each 10 minutes (via lambda)
            "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
        },
    },
})
