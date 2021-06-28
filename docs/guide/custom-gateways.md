# Gateways

## Custom Gateway Listener
::: tip Enterprise Only
Only Enterprise merchants can set up and utilize custom payment gateways. Please [contact us](mailto:support@atshop.io)
to upgrade to Enterprise.
:::

### Your REST API
When customers select your custom gateway on ATShop and proceed to check out with it, their browser will send a
background (XHR) request to the URL configured in your **Custom Gateway** settings. Alongside some query parameters
identifying the order they are trying to pay for.

Since the requests are issued directly by customer's browsers and not from our servers, it is important that your API
has the proper [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings.

Let's imagine your configured gateway URL is `https://api.example.com/payment-link`.

When a customer tries to check out with your gateway, their request will look similar to the following.

```http request
GET https://api.example.com/payment-link?orderId=4wuvZe7XgCZapx746 
```
> Notice how `orderId=...` is appended to the URI. This is important to identify the customer's order. You can query our
> API using this ID to retrieve the customer's email address and how much they are expected to pay for their order.

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

/**
 * An integer in US cents representing how much the customer should pay for this order. 
 */
const value = order.toPay || Math.round(order.quantity * product.value);
```
The above example uses our experimental REST API for the sake of simplicity. It is however recommended that you utilize
the DDP API to retrieve this data.
- [Retrieve an order](/reference/publications/orders)
- [Retrieve a product](/reference/publications/products)

### Fulfilling orders
To fulfill an order, refer to our [order documentation](/reference/methods/orders).