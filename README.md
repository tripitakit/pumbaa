Pumbaa
===

![alt tag](http://www.nationalgeographic.it/images/2010/03/22/131940827-media-409e5990-3b7a-4859-b262-b7ec7f86f724.jpg)


Test-study project of a self-hosted (mongoDB + node.js + express) Server Application with a RESTful CRUD API
for an Appcelerator Titanium Alloy iPad client app (timon).

The Appcelerator Titanium Alloy iPad client app is [timon](https://github.com/tripitakit/timon/wiki/timon).

---

##Dependencies##
A working environment for
- Node.js
- MongoDB 

##Install##
Clone repository, cd into it and install dependencies
~~~
$ git clone https://github.com/tripitakit/pumbaa.git
$ cd pumbaa
$ npm install
~~~

##Usage##
Start the server with the command
~~~
$ node server.js
~~~

GET:
- /:collection			: find all documents of named collection
- /:collection/:id		: find one by :id in the named collection

POST 
- /:collection			: insert a document in a named collection

PUT
- /:collection/:id		: update the document identified by :id in the named collection

DELETE
- /:collection/:id		: delete the document identified by :id from the named collection




