var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    Music      = require('../models/music'),
    passport    = require('passport');

router.get('/', function(req, res){
    res.render('show.ejs'); 
});

// router.get('/addArt', function(req, res){
//     Artist.find({}, function(err, allArtist){
//         if(err){
//             console.log(err);
//         } else{
//             res.render('addArt.ejs', {artist: allArtist});
//         }
//     });
// });


router.get('/member', function(req, res){
    res.render('member.ejs'); 
});

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