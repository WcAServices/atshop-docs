# Order

## Check if an order exists
<<< ../snippets/node/orders/check-if-exists.js

## Fulfill an unpaid order
Handy if you're developing your own payment system for your shop. The below example will mark an order as paid,
completing the order and in turn sending the ordered items to the customer. Do note that this method requires
administrative privileges over your shop. See [the authentication section](/guide/authentication.md) for more info.

<<< ../snippets/node/orders/fulfill-order.js