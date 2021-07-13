# Replacements
A replacement identifies a request to issue additional stock entries to a customer's order. Stock that is originally
issued with a paid order is separated from the stock that is issued as a replacement.

## Fetch replacements issued for an order
```js
const orderId = '...';

DDPClient.subscribe('order.replacements', [orderId], () => {
    const replacements = DDPClient.collections['order.replacements'];
    
    replacements.forEach(({ createdAt, _id, quantity }) => {
        console.log({
            _id, // Replacement ID (Use to retrieve stock entries)
            quantity, // Number of stock entries sent to customer.
            createdAt, // A timestamp for when the replacement was issued.
        })
    })
})
```

You can use replacement IDs (`_id`) to retrieve the additional stock that was attached to the customer's order.

### Read more
- [Retrieve replaced stock](/reference/publications/stock.md)