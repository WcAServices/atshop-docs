const orderId = 'your-order-id-here';

DDPClient.subscribe('order', [orderId], () => {
    const collection = DDPClient.collections['shop.orders']; // Array of orders you're subscribed to.
    const order = collection[orderId];                       // Your order.

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
});