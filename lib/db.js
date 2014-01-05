var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "appusr01";
var password = "n0Flags";
var dburl  	 = "ds039487.mongolab.com:39487/timetrackerdb";
connect();

// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + dburl;
	mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect();
}