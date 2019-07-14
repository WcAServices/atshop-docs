# Authentication
> Authentication is fully optional unless you need to perform an action that specifically asks for authorization.

While most API actions can be performed without any form of authentication, certain actions that involve modification
or access to sensitive information require you to authorize yourself.

Certain methods and publications (normally prefixed with `admin.`) require administrative privileges for the
associated shop.

## Fetching your login token
Head over to [atshop.io](https://atshop.io) and login. Once logged in, open up your browser's developer console and
run the following line of code to fetch your current login token.
```js
Meteor._localStorage.getItem('Meteor.loginToken');
```
You'll see a string of text show up when you run the line - this is your login token.

If you need to invalidate the token, simply log out or run the following in your developer console:
```js
Meteor.logout();
``` 

## Logging in
Pull in the [`ddp-login`](https://github.com/vsivsi/ddp-login#ddp-login) plugin and execute the 
`loginWithToken()` method when connected to DDP.
```js
const Login = require('ddp-login');
const loginToken = 'login-token-from-above';

// Your DDP connect call from the introduction:
DDPClient.connect((err, reconnected) => {
    if (err) {
        throw err;
    }
    
    Login.loginWithToken(DDPClient, loginToken, (err, user) => {
        // You are now logged in.
    })
});
```