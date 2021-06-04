var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    artist      : String,
    imageArt    : String,
    music: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'music'
        }
    ]
});

module.exports = mongoose.model('Artist', artistSchema);