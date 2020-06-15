const stockToRemove = [
    {
        _id: '_id of the stock entry you want to remove',
        productId: '_id of the product this stock entry belongs to',
    },
    {
        _id: '_id of another stock entry',
        productId: 'associated product ID for this stock entry'
    },
    /// ...
    // Feel free to populate with as many or as few stock entries as you wish to delete at once.
]

DDPClient.call('admin.product.stock.delete', [stockToRemove], (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully removed %s stock entries from your shop!', stockToRemove.length);
})