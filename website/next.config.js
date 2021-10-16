const withTM = require('next-transpile-modules')(['next-auth', 'query-string']);
// const isProd = process.env.NODE_ENV === 'production';

module.exports = withTM({
    serverRuntimeConfig: {
        baseURL: process.env.BASE_URL,
        COOKIE_NAME: process.env.COOKIE_NAME,
        PORT: process.env.PORT,
        SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
        redis: {
            port: process.env.REDIS_PORT,
            url: process.env.REDIS_URL
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./generate-sitemap');
        }

        return config;
    }
    // assetPrefix: isProd ? 'https://cdn-product.mncdn.com' : '',
});
