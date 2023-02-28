const DDP = require('ddp');

/* Prepare the client */
const DDPClient = new DDP({
    url: 'wss://ddp.atshop.io/websocket',
});

/* Connect to the server */
DDPClient.connect((err, reconnected) => {
    if (err) {
        throw err;
    }

    // Successfully connected!

});
