//require mongoose to connect to the database

const mongoose = require('mongoose');

//connect to the database

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

//export the connection

module.exports = connection;