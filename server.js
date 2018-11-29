// Requiring necessary npm middleware packages 
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require("express-session");
// Setting up port
const PORT = process.env.PORT || 8080;
// Creating express app and configuring middleware 
//needed to read through our public folder
const app = express();
const db = require("./models");
require('./config/passport');
const routesApi = require('./controllers/index');


app.use(cookieParser());
app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session())
app.use(express.static('./public'));

app.use('/api', routesApi);
app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
//404
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
//401 Unauthorized
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401);
		res.json({ "message": err.name + ": " + err.message });
	}
});
db.sequelize.sync().then(() => {
	app.listen(3000);
});
