const orderId = '321abc'; // '_id' field of the order you want to issue a replacement for.
const shopId = 'cba123'; // The 'shopId' field of the order you're issuing a replacement for.
const quantity = 5; // Number of items to send to customer as replacements.
const note = 'Products were non-functioning at arrival.'; // (max 255 characters)

DDPClient.call('admin.orders.replace', [orderId, quantity, note], (err, resp) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully issued %d replacement items for order no. %s./nNote: %s', quantity, orderId, note);
});