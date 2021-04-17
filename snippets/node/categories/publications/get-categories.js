const shopId = 'ID-of-your-shop';

DDPClient.subscribe('shop.categories', [shopId], () => {
    const categories = DDPClient.collections['shop.categories'] // This is now populated with all categories available in your shop.
});