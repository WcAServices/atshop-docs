const shopId = 'ID-of-your-shop';

const productIds = [ // Array of products you'd like to retrieve.
    'ciLygg2LmnNYHKrp7',
]

DDPClient.subscribe('admin.shop.products', [shopId, productIds], () => {
    const products = DDPClient.collections['shop.products']; // Array of products fetched from the server.
})