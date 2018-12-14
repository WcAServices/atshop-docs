module.exports = {
    title: 'ATShop API',
    description: 'API documentation for ATShop.io',

    themeConfig: {
        search: false,
        lastUpdated: 'Last Updated',

        nav: [
            {
                text: 'ATShop',
                link: 'https://atshop.io/'
            },
            {
                text: 'GitHub',
                link: require('../../package.json').homepage,
            }
        ],

        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    '/guide/',
                    '/guide/getting-started'
                ]
            },
            {
                title: 'Reference',
                collapsable: false,
                children: [
                    '/reference/orders'
                ]
            }
        ]
    },
};