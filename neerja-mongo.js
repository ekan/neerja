const MONGO_USER = process.env.MONGO_USER
const MONGO_URI = process.env.MONGO_URI
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URI}`, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open connection');
});
