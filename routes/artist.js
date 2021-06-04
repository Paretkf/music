var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    Artist      = require('../models/artist'),
    passport    = require('passport');

router.get('/', function(req, res){
    Artist.find({}, function(err, allArtist){
        if(err){
            console.log(err);
        } else{
            res.render('artist.ejs', {artist: allArtist});
        }
    });
});

router.post('/', function(req, res){
    
});
// router.post('/', function(req, res){
//     var artist = req.body.artist;
//     var imageArt = req.body.imageArt;
//     var newArtist = {artist: artist, imageArt: imageArt};
//     Artist.create(newArtist, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             res.redirect('/');
//         }
//     });
// });
// router.get('/', function(req, res){
//     res.render('artist.ejs');
// });

// router.get('/', function(req, res){
//     Artist.find({}, function(err, allArtist){
//         if(err){
//             console.log(err);
//         } else{
//             res.render('artist.ejs', {artist: allArtist});
//         }
//     });
// });




router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}

module.exports = router;