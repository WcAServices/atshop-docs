const productId = '_id of the product you want to add stock to';
const stock = [
    'stock entry 1',
    'stock entry 2',
    'some-other-stock-entry'
];

DDPClient.call('admin.product.stock.add', [productId, stock], (err, amountAdded) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully added %s items to your product stock!', amountAdded);
})