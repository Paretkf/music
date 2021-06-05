var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    name      : String,
    image     : String,
    music: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'music'
        }
    ]
});

module.exports = mongoose.model('Artist', artistSchema);