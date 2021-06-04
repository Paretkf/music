var mongoose = require('mongoose');
const artist = require('./artist');

var musicSchema = new mongoose.Schema({
    artist: String,
    music: String,
    imageMu: String,
    mp3: String,
    melody: String
});

module.exports = mongoose.model('Music', musicSchema);