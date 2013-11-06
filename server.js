var express = require('express'),
    timons = require('./routes/timons');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});
 
app.get('/:collection', timons.findAll);
app.get('/:collection/:id', timons.findById);
app.post('/:collection', timons.addTimon);
app.put('/:collection/:id', timons.updateTimon);
app.delete('/:collection/:id', timons.deleteTimon);
 
app.listen(3000);
console.log('Listening on port 3000...');