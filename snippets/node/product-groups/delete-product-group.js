const productGroupId = '_id of the group you want to remove';

DDPClient.call('shop.product.groups.remove', [productGroupId], (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully deleted product group %s!', productGroupId);
})