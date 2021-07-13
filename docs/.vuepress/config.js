module.exports = {
    title: 'ATShop API',
    description: 'API documentation for ATShop.io',

    plugins: [
        [require('vuepress-intercom'), { appId: 'msak0o3q' }]
    ],

    themeConfig: {
        search: false,

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
                    '/guide/setting-up-ddp',
                    '/guide/authentication',
                    '/guide/custom-gateways',
                ]
            },
            {
                title: 'Methods',
                collapsable: false,
                children: [
                    '/reference/methods/orders',
                    '/reference/methods/products',
                    '/reference/methods/product-groups',
                    '/reference/methods/stock',
                ]
            },
            {
                title: 'Publications',
                collapsable: false,
                children: [
                    '/reference/publications/orders',
                    '/reference/publications/products',
                    '/reference/publications/stock',
                    '/reference/publications/product-groups',
                    '/reference/publications/categories',
                    '/reference/publications/replacements',
                ]
            }
        ]
    },
};