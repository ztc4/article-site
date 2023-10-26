/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ["ld3ydacyy9.execute-api.us-east-1.amazonaws.com","article-website-images.s3.amazonaws.com","article-api-cookies-instead-of.onrender.com","article-api-wd57.onrender", "article-api-cookies-instead-of.onrender","100.26.60.152"],
        formats: ["image/avif","image/webp"],
    },
}

module.exports = nextConfig
