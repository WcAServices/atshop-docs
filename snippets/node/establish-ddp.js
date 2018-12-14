const DDP = require('ddp');

const client = new DDP({
    url: 'wss://atshop.io/websocket',
});

client.connect((err, reconnected) => {
    if (err) {
        throw err;
    }

    // Successfully connected!
});