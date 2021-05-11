var mongoose = require('mongoose');

var collectionSchema = new mongoose.Schema({
    artist      : String,
    imageArt    : String,
    music       : String,
    imageMu     : String,
    melody      : String
});

module.exports = mongoose.model('Collection', collectionSchema);