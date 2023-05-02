const now = String(Date.now())

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/tailwind.config.js')
    eleventyConfig.addWatchTarget('./src/input.css')

    eleventyConfig.addPassthroughCopy({ './static': './' })

    eleventyConfig.setServerOptions({
        port: 3000
    })

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    }
}