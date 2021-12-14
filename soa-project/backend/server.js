let express = require('express');
let mongoose = require('mongoose');

//pour securisé des serveurs web contre l'acces d'autres siteswebs ou domains
let cors = require('cors');
//convertiseur json
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// importation des routes
const taskRoute = require('../backend/routes/task.routes')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {useNewUrlParser: true}).then(() => {
    console.log('connected!')
}, error => {
    console.log('notconnected : ' + error)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/tasks', taskRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


