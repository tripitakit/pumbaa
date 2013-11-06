var express = require('express'),
    timons = require('./routes/timons');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});
 
app.get('/timons', timons.findAll);
app.get('/timons/:id', timons.findById);
app.post('/timons', timons.addTimon);
app.put('/timons/:id', timons.updateTimon);
app.delete('/timons/:id', timons.deleteTimon);
 
app.listen(3000);
console.log('Listening on port 3000...');