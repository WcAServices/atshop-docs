const shopId = 'ID-of-your-shop';

const query = {             // optional
    search: 'Steam Keys',   // Search by product name
}

const options = {
    limit: 50, // Maximum number of products to fetch at one time. (optional)
    skip: 0,   // Number of products to skip. (optional)
    sort: {
        createdAt: -1, // Sort direction. (optional)
                       // -1 = descending
                       // 1 = ascending
    }
}

DDPClient.subscribe('admin.shop.products', [shopId, query, options], () => {
    const products = DDPClient.collections['shop.products']; // Array of product objects.
})