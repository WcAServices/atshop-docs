# Stock

::: tip Requires Authentication
The following examples require administrative privileges for your shop.

See the [authentication guide](/guide/authentication.md) for more information.
:::

## Fetch stock attached to a fulfilled order
```js
const orderId = 'your-order-id';

DDPClient.subscribe('order.items', [orderId], () => {
    const soldStock =  DDPClient.collections['shop.product.stock'];
    
    soldStock.forEach((item) => {
        item._id // ID of the stock entry.
        item.entry // Line-item for the stock entry. This is what is displayed to the customer.
        item.orderId // Order ID this stock item is attached to.
    });
})
```

## Fetch stock from a replacement
```js
const replacementId = '...';

DDPClient.subscribe('order.replacement.items', [replacementId], () => {
    const replacedStock = DDPClient.collections['shop.product.stock'];
    
    replacedStock.forEach(({ entry, replacementId }) => console.log({
        replacementId,
        entry,
    }))
})
```