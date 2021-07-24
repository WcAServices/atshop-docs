# Coupon Codes

::: tip Enterprise Only
This feature is still in early access and is currently only available to merchants on the Enterprise plan.
:::

## Retrieve all coupons
```js
const query = {
    shopId: '...' // Your shop's _id field.
}
DDPClient.subscribe('shop.admin.coupons', [query], () => {
    const coupons = DDPClient.collections['shop.coupons'];
})
```