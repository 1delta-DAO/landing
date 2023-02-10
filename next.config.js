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
    // webpack: (config) => {
    //     config.resolve.fallback = { fs: false };

    //     return config;
    // },
};
