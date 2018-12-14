// DDPClient is from "Setting up DDP" guide.

const orderId = 'some-order-id';

DDPClient.call('order.exists', [orderId], (error, exists) => {
    if (!exists) {
        throw new Error('Order does not exist!');
    }

    console.log('Order exists!');
});