# Orders

## Fetch a single order
<<< ../snippets/node/orders/publications/subscribe-to-order.js

## Fetch all orders
::: tip Requires Authentication
The following example requires administrative privileges for your shop.

See the [authentication guide](/guide/authentication.md) for more information.
:::

```js
const query = {
    shopId: 'your-shop-id-here', // Your shop ID (REQUIRED)

    paid: true, // Whether you want to fetch paid or non-paid orders only. Leave undefined for both paid and non-paid. (optional)
    status: 'completed', // Fetch orders with a certain fulfillment status. (optional)
    productId: 'some-product-id', // Fetch orders only for the given product. (optional)    
    email: 'jane@doe.com', // Fetch orders only from the given customer email. (optional)
};

const options = {
    limit: 50, // Maximum number of orders to fetch at one time. (optional)
    skip: 0,   // Number of orders to skip. (optional)
    sort: {
        createdAt: -1, // Sort direction. (optional)
                       // -1 = descending
                       // 1 = ascending
    }   
};


DDPClient.subscribe('admin.orders', [query, options], () => {
    const orders = DDPClient.collections['shop.orders'];
    
    orders.forEach((order) => {
        order._id        // Your order ID.
        order.email      // Email address of customer.
        order.fulfilled  // Whether or not all ordered items have been sent to the customer.
        order.paid       // Whether or not we have received payment for this order.
        order.productId  // ID of the product ordered.
        order.paidAt     // Date of received payment.
        order.status     // Order status:
                         // 'reversed' = The customer triggered a chargeback for this order, reverting funds back to the customer.
                         // 'completed' = Order was paid for and fulfilled.
                         // 'discarded' = Order was discarded by the shop administrator.
                         // 'hold' = Pending manual review by the shop administrator.    
    })
});
```

## Watch for incoming orders
Assuming you have an active `'admin.orders'` subscription as described above, you can watch for changes to your query
results using the [`ddp`](https://www.npmjs.com/package/ddp) `observe()` method. This is also assuming that the
created order matches your query options defined above.
```js
const orderObserver = DDPClient.observe('shop.orders');

orderObserver.added = (_id) => {
    console.log(`Order with ID ${_id} was added to the collection. (DDP.collections['shop.orders'])`);

    // You should find that DDPClient.collections['shop.orders'] has updated with the new order.
    DDPClient.collections['shop.orders'].forEach((order) => {
        if (order._id === _id) {
            console.log('Located new order:', order);        
        }
    });
}
```