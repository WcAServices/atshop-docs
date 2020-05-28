const shopId = 'ID-of-your-shop';

const query = {
    shopId: shopId, // Your Shop ID.
    search: 'Steam Keys', // Search by product name
}

const options = {
    limit: 50, // Maximum number of orders to fetch at one time. (optional)
    skip: 0,   // Number of orders to skip. (optional)
    sort: {
        createdAt: -1, // Sort direction. (optional)
                       // -1 = descending
                       // 1 = ascending
    }
}

DDPClient.subscribe('admin.shop.products', [query, options], () => {
    const products = DDPClient.collections['shop.products']; // Array of product objects.
})