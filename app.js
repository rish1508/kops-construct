var express = require('express');
var app = express();
app.get('/',function(req, res){
    res.json({ Name:'Rishabh'});
});
app.listen(3000);