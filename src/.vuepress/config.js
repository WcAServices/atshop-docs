module.exports = {
    title: 'ATShop API',
    description: 'API documentation for ATShop.io',

    themeConfig: {
        search: false,
        nav: [
            {
                text: 'ATShop',
                link: 'https://atshop.io/'
            },
            {
                text: 'GitHub',
                link: require('../../package.json').homepage,
            }
        ]
    }
};