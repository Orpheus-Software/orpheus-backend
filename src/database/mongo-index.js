const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { userMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;