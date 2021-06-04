var mongoose = require('mongoose');

var homeSchema = new mongoose.Schema({
    no: String,
    artist: String,
    music: String,
    imageMu: String
});

module.exports = mongoose.model('Home', homeSchema);