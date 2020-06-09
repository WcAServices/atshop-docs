const productId = '_id of product you want to retrieve stock from';

DDPClient.call('admin.product.stock.get.all', [productId], (err, stock) => {
    if (err) {
        return console.error(err);
    }

    stock.forEach((item) => {
        item._id // ID of the stock entry.
        item.entry // Line-item for the stock entry. This is what is displayed to the customer.
        item.createdAt // Timestamp for when this stock item was added to your shop.
    })
})