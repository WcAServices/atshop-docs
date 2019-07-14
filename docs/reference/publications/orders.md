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

    paid: true, // Whether or not to only fetch paid orders. (optional)
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