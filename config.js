const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb://localhost/mychat1',{  
	userNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB....'))
.catch(err =>console.error('Cannot connect to MongoDb:27017',err ));
mongoose.set('useCreateIndex', true);

module.exports = [].concat(connection);