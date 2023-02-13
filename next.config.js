const withPWA = require('next-pwa');
const withImages = require('next-images')

module.exports = {
    compiler: {
        styledComponents: true,
    },
    ...withImages(),
    future: {
        webpack5: true,
    },
    ...withPWA({
        dest: 'public',
    }),
    env: {
        REACT_APP_EMAIL_KEY: process.env.EACT_APP_EMAIL_KEY,
        REACT_APP_EMAIL_TEMPLATE_KEY: process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
        REACT_APP_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
    },
};
