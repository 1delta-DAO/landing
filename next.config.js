const withPWA = require('@ducanh2912/next-pwa').default({ dest: 'public' });
const withImages = require('next-images')

module.exports = withPWA({
    compiler: {
        styledComponents: true,
    },
    ...withImages(),
    env: {
        REACT_APP_EMAIL_KEY: process.env.REACT_APP_EMAIL_KEY,
        REACT_APP_EMAIL_TEMPLATE_KEY: process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
        REACT_APP_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
    },
});
