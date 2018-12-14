const DDP = require('ddp');

/* Prepare the client */
const client = new DDP({
    url: 'wss://atshop.io/websocket',
});

/* Connect to the server */
client.connect((err, reconnected) => {
    if (err) {
        throw err;
    }

    // Successfully connected!

});