# Gateways

## Custom Gateway Listener
::: tip Enterprise Only
Only Enterprise merchants can set up and utilize custom payment gateways. Please [contact us](mailto:support@atshop.io)
to upgrade to Enterprise.
:::

### Your REST API
When customers check out using your custom gateway, they will hit the URL you've specified in your gateway settings,
including an order ID in the URI's query parameters.

Your Gateway URL = `https://api.example.com/payment-link`

Customers will send a GET request to your specified URL, including an order ID when checking out using your gateway.

```http request
GET https://api.example.com/payment-link?orderId=4wuvZe7XgCZapx746 
```

To redirect customers to a custom checkout page, return a JSON response in the following format;
```json5
{
  "type": "url",
  "url": "https://example.com/checkout/abc123"
}
```

### Calculating payment amounts.
Retrieve the order's product ID and multiply the product's value by the order quantity. Orders that are
discounted will have a `toPay` property attached.

```js
const orderId = request.query.orderId;
const order = await HTTP.get(`https://i-api.atshop.io/shop/orders/${orderId}`);
const product = await HTTP.get(`https://i-api.atshop.io/shop/products/${order.productId}`);

const value = order.toPay || Math.round(order.quantity * product.value);
```
The above example uses our experimental REST API for the sake of simplicity. It is however recommended that you utilize
the DDP API to retrieve this data.
- [Retrieve an order](/reference/publications/orders)
- [Retrieve a product](/reference/publications/products)

### Fulfilling orders
To fulfill an order, refer to our [order documentation](/reference/methods/orders).