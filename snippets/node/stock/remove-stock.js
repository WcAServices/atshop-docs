const stockToRemove = [
    {
        _id: '_id of the stock entry you want to remove',
        productId: '_id of the product this stock entry belongs to',
    },
]

DDPClient.call('admin.product.stock.delete', [stockToRemove], (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully removed %s stock entries from your shop!', stockToRemove.length);
})