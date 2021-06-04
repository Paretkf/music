var express     = require('express'),
    router      = express.Router(),
    Slide       = require('../models/slide'),
    User        = require('../models/user'),
    Home        = require('../models/home'),
    passport    = require('passport');



router.get('/', function(req, res){
    Slide.find({}, function(err, allSlide){
        if(err){
            console.log(err);
        } else{
           Home.find({}, function(err, allhome){
                if(err){
                    console.log(err);
                } else{
                    res.render('home.ejs', {home: allhome, slide: allSlide});
                }
            }); 
        }
    });
});

router.post('/', function(req, res){
});


router.get('/contact', function(req, res){
    res.render('contact.ejs');
});

router.get('/login', function(req, res){
    res.render('login.ejs');
});

router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }), function(req, res) {
});

router.get('/register', function(req, res){
    res.render('register.ejs');
});

router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/');
        });
    });
});

router.get('/favorite', isLoggedIn, function(req, res){
    res.render('favorite.ejs');
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