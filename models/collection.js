var mongoose = require('mongoose');

var collectionSchema = new mongoose.Schema({
    artist: String,
    music: String,
    imageMu: String
});

module.exports = mongoose.model('Collection', collectionSchema);