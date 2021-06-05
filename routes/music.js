var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    Artist      = require('../models/artist'),
    passport    = require('passport');

router.get('/',  function(req, res){
    res.render('music.ejs');
});


// router.get('/addMu', function(req, res){
//     Artist.findById(req.params.id, function(err, foundArtist){
//         if(err){
//             console.log(err);
//         } else {
//             res.render("addMu.ejs", {artist: foundArtist});
//         }
//     });    
// });

// router.post('/',  function(req, res){
//     Artist.findById(req.params.id, function(err, foundArtist){
//         if(err){
//             console.log(err);
//             res.redirect('/artist');
//         } else {
//             Music.create(req.body.music, function(err, music){
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     music.author.id = req.user._id;
//                     music.save();
//                     foundArtist.music.push(music);
//                     foundArtist.save();
//                     res.redirect('/artist/'+ foundArtist._id);
//                 }
//             });
//         }
//     });
// });

router.get('/payment', isLoggedIn, function(req, res){
    res.render('payment.ejs');
});

router.get('/melody', isLoggedIn, function(req, res){
    res.render('melody.ejs');
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