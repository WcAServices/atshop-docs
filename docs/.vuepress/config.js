module.exports = {
    title: 'ATShop API',
    description: 'API documentation for ATShop.io',

    plugins: [
        [require('vuepress-intercom'), { appId: 'msak0o3q' }]
    ],

    themeConfig: {
        search: false,
        lastUpdated: 'Last Updated',

        nav: [
            {
                text: 'GitHub',
                link: require('../../package.json').homepage,
            },
            {
                text: 'ATShop',
                link: 'https://atshop.io/'
            },
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