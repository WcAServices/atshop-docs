const shopId = 'ID-of-your-shop';

DDPClient.subscribe('shop.product.groups', [shopId], () => {
    const productGroups = DDPClient.collections['shop.products.group'] // This is now populated with all product groups for your shop.
});