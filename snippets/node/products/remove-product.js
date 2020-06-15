const productId = '_id of the product you want to remove';

DDPClient.call('admin.product.remove', [productId], (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully removed product #%s from your shop!', productId);
})