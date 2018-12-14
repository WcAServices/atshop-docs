# Getting Started
The ATShop API is currently available only through WebSockets. REST endpoints are still a work in process.

We rely on Meteor's DDP protocol for data transfer and method calls. Depending on your programming language of choice,
there might be some useful libraries you can use that take care of the heavy lifting.

For the following guide, we're going to assume you're in a [Node.js](https://nodejs.org/) environment.

If your language of choice lacks any libraries and you would like to build your own DDP client, see the
[DDP Spec](https://github.com/meteor/meteor/blob/devel/packages/ddp/DDP.md)