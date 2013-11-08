Pumbaa
===

![alt tag](http://www.nationalgeographic.it/images/2010/03/22/131940827-media-409e5990-3b7a-4859-b262-b7ec7f86f724.jpg)


Test-study project of a self-hosted (mongoDB + node.js + express) Server Application with a RESTful CRUD API
for an Appcelerator Titanium Alloy iPad client app (timon).

The Appcelerator Titanium Alloy iPad client app is [timon](https://github.com/tripitakit/timon).

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
- /:collection			: find all documents of collection docs
- /:collection/:id		: find one by :id

POST 
- /:collection			: insert a document to collection docs

PUT
- /:collection/:id		: update the document identified by :id

DELETE
- /:collection/:id		: delete the document identified by :id


##Public pumbaa instance##
A public pumbaa instance is running at http://pumbaa.iosvappo.it.

No web interface is present. Use a web browser to test the api with the collection 'docs';

i.e. make a get request at the url http://pumbaa.iosvappo.it/docs to show all the documents in it.

