const orderId = 'your-order-id-here';

DDPClient.subscribe('ordered.product', [orderId], () => {
    const collection = DDPClient.collections['shop.products'];

    console.log(collection);
});