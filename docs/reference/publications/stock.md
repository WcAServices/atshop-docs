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
Stock originally issued with a fulfilled order and any replacements are separated resources.
This means any replacements you may have issued, will not appear as sold stock, but rather replaced stock.

Be sure to filter your `'shop.product.stock'` collection down to each replacement you're working with.
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
You can retrieve replacement IDs from the [`'order.replacements'`](/reference/publications/replacements.md) publication.