const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { userMongoClient: true });
mongoose.Promise = global.Promise; // global.Promise não é mais necessário pois o nodejs, hoje em dia, já suporta promise nativamente. pode remover essa linha.

module.exports = mongoose;