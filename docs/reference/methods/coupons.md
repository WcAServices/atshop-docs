# Coupon Codes

::: tip Enterprise Only
This feature is still in early access and is currently only available to merchants on the Enterprise plan.
:::

## Create a coupon code
```js
const coupon = {
    shopId: '', // Your shop's ID
    code: 'SOME-COUPON', // Coupon code
    maxUses: 5, // Max allowed uses for this coupon.
    discountType: 'percentage', // one of 'percentage' or 'fixed'
    value: 100, // Discount amount. 100 = 100% if the discountType is 'percentage'. 100 would be $1 if the discountType is set to 'fixed'
    productIds: [], // List of product IDs that this coupon supports. Leave empty to allow all products.
    usableFrom: new Date('Jan 25, 2025'), // Date when the coupon should become valid. (optional)
    usableUntil: new Date('Jan 26, 2025'), // Date when the coupon should no longer be usable. (optional)
    notes: 'Can be anything. Not used for anything but internal reference.'
}

DDPClient.call('coupon.create', [coupon], (err, couponId) => {
    if (err) {
        return console.error(err);
    }
    
    console.log('Successfully created coupon with ID: %s', couponId);
})
```

## Edit a coupon
```js
const coupon = {
    _id: '...', // ID of the coupon you want to edit.
    shopId: '', // Your shop's ID
    code: 'SOME-COUPON', // Coupon code
    maxUses: 5, // Max allowed uses for this coupon.
    discountType: 'percentage', // one of 'percentage' or 'fixed'
    value: 100, // Discount amount. 100 = 100% if the discountType is 'percentage'. 100 would be $1 if the discountType is set to 'fixed'
    productIds: [], // List of product IDs that this coupon supports. Leave empty to allow all products.
    usableFrom: new Date('Jan 25, 2025'), // Date when the coupon should become valid. (optional)
    usableUntil: new Date('Jan 26, 2025'), // Date when the coupon should no longer be usable. (optional)
    notes: 'Can be anything. Not used for anything but internal reference.'
}

DDPClient.call('coupon.edit', [coupon], (err) => {
    if (err) {
        return console.error(err);
    }
    
    console.log('Successfully updated coupon with ID: %s', coupon._id);
})
```

## Delete a coupon
```js
const couponId = '...' // _id field of the coupon you want to delete.

DDPClient.call('coupon.remove', [couponId], (err) => {
    if (err) {
        return console.error(err);
    }
    
    console.log('Successfully deleted coupon with ID: %s', couponId);
})
```

