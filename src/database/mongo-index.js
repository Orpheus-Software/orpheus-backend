const mongoose = require('mongoose');

/**
 * Cluster temporário e acessível a todos os IPs para desenvolvimento:
 */
mongoose.connect('mongodb+srv://op-standard:standard@orpheus-0-rcwyr.mongodb.net/test?retryWrites=true&w=majority', { 
    userMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;