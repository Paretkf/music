var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    Artist      = require('../models/artist'),
    Music      = require('../models/music'),
    passport    = require('passport');
    


router.get('/show', function(req, res){
    res.render('show.ejs'); 
});

router.get('/member', function(req, res){
    res.render('member.ejs');
});


router.get('/addArt', function(req, res){
    res.render('addArt.ejs');
});

router.post('/addArt', function(req, res){
    Artist.create(req.body.artist, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/artist');
        }
    });
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


// router.get('/addMu', function(req, res){
//    Music.find({}, function(err, allMusic){
//         if(err){
//             console.log(err);
//         } else{
//             res.render('addMu.ejs', {artist: allMusic});
//         }
//     });
// });

// router.post('/', function(req, res){
//     var music = req.body.music;
//     var imageMu = req.body.imageMu;
//     var mp3 = req.body.mp3;
//     var melody = req.body.melody;
//     var newArtist = {artist: artist, imageArt: imageArt, mp3:mp3, melody:melody };
//     Music.create(newMusic, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             res.redirect('/');
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