const productId = '_id of the product you want to retrieve all stock from';

DDPClient.call('admin.product.stock.get.all', [productId], (err, stock) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully retrieved %s stock entries from product #%s!', stock.length, productId);
    stock.forEach((item) => {
        item._id // ID of the stock entry.
        item.entry // Line-item for the stock entry. This is what is displayed to the customer.
        item.createdAt // UTC timestamp for when this stock item was added to your shop.
    })
})