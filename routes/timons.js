var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('test', server);
 
db.open(function(err, db) {
    if (!err) {
        console.log("Connected to 'test' database");
    } else {
    	throw(err);
    }
});
 
var existsOrCreate = function(coll){
	db.collection(coll, {strict:true}, function(err, collection) {
	    if (err) {
	        console.log("!The collection doesn't exist.");
		}
	});
} 
 

exports.findById = function(req, res) {
	var coll = req.params.collection;
	
    var id = req.params.id;
    console.log('Retrieving document: ' + id);
    db.collection(coll, function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 

exports.findAll = function(req, res) {
	var coll = req.params.collection;
	console.log('Retrieving documents...');
    db.collection(coll, function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 

exports.addTimon = function(req, res) {
	var coll = req.params.collection;
    var doc = req.body;
    console.log('Adding document: ' + JSON.stringify(doc));
    db.collection(coll, function(err, collection) {
        collection.insert( doc, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateTimon = function(req, res) {
	var coll = req.params.collection;
    var id = req.params.id;
    var doc = req.body;
    
	console.log('Updating document: ' + id);
    console.log(JSON.stringify(doc));
	
    db.collection(coll, function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, doc, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating document: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(doc);
            }
        });
    });
}
 
exports.deleteTimon = function(req, res) {
	var coll = req.params.collection;
    var id = req.params.id;
    console.log('Deleting document: ' + id);
    db.collection(coll, function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}