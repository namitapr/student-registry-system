// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/studentRegistry');

// on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb @ 27017');
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error in db connection');
    }
});

// port num
const port = 3000;

// adding mw
app.use(cors());

// body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);

// testing server
app.get('/', (req, res)=>{
    res.render('index.html');
});

app.listen(port, ()=>{
    console.log('Server started at port:'+port);
});