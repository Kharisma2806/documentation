/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [require('path').join(__dirname, 'styles')],
    },
    compiler: {
        styledComponents: {
            displayName: true,
        }
    }
}

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = withNextra(nextConfig)
