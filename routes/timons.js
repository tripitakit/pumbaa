var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('test', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'test' database");
        db.collection('timons', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'timons' collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving timon: ' + id);
    db.collection('timons', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
	console.log('Retrieving timons...');
    db.collection('timons', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addTimon = function(req, res) {
    var timon = req.body;
    console.log('Adding timon: ' + JSON.stringify(timon));
    db.collection('timons', function(err, collection) {
        collection.insert(timon, {safe:true}, function(err, result) {
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
    var id = req.params.id;
    var timon = req.body;
    console.log('Updating timon: ' + id);
    console.log(JSON.stringify(timon));
    db.collection('timons', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, timon, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating timon: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(timon);
            }
        });
    });
}
 
exports.deleteTimon = function(req, res) {
    var id = req.params.id;
    console.log('Deleting timon: ' + id);
    db.collection('timons', function(err, collection) {
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