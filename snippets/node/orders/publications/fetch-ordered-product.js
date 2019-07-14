const order = { // Order from the 'Orders' publication example.
    _id: 'order-id-from-example',
    productId: 'product-id',
};

DDPClient.subscribe('ordered.product', [order._id], () => {
    const collection = DDPClient.collections['shop.products'];
    const product = collection[order.productId];

    product._id         // Product ID
    product.name        // Product name
    product.description // Product description as defined in the product manager page.
    product.minQuantity // Minimum order quantity.
    product.shopId      // ID of the shop this product belongs to.
    product.stockCount  // Remaining stock.
    product.value       // Value in cents for this product. ($1 = 100).
});