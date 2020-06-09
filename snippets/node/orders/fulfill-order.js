/**
 * The _id field of the order you want to fulfill/mark as paid.
 */
const orderId = '_id of the order you want to fulfill';

/**
 * Amount paid in cents.
 * 200 = $2,00
 */
const amountPaid = 200;

/**
 * (optional) indicator for how the customer paid for the order.
 * Leave as 'alternative-payment' unless you know what you're doing.
 */
const paymentMethod = 'alternative-payment'

DDPClient.call('order.fulfill.alternativePayment', [orderId, amountPaid, paymentMethod], (err, resp) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully fulfilled %s!', orderId);
})