const   express         = require('express'),
        app             = express(),
        bodyParser      = require('body-parser'),
        mongoose        = require('mongoose'),
        Slide           = require('./models/slide'),
        Collection      = require('./models/collection'),
        seedDB          = require('./seeds'),
        passport        = require('passport'),
        LocalStrategy   = require('passport-local'),
        User            = require('./models/user'),
        Schema          = mongoose.Schema;

mongoose.connect('mongodb://localhost/uCollectionV3');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
//seedDB();

// Collection.create(
//     {
//         artist: "Justin Drew Bieber",
//         // imageArt: "https://m.thaiticketmajor.com/img_artist/prefix_1/0301/301/301-5ecc9151bda42-a.jpg",
//         music: "Peaches",
//         imageMu: "https://i1.sndcdn.com/artworks-IcnB2XyRE4cFgxOG-UzaIyw-t500x500.jpg",
//         // melody: "I got my peaches out in Georgia (Oh yeah, shit) I get my weed from California (That's that shit) I took my chick up to the North, yeah (Bad ass bitch) I get my light right from the source, yeah (Yeah, that's it)"
//     },
//     function(err, collection){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("New data added");
//             console.log(collection);
//         }
//     }
// );


app.use(require('express-session')({
    secret: 'secret is always secret.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.get('/', function(req, res){
    Slide.find({}, function(err, allSlide){
        if(err){
            console.log(err);
        } else{
            res.render('home.ejs', {slide: allSlide});
        }
    });
});

app.post('/', function(req, res){
    var img = req.body.image;
    var newSlide = {image: image};
    Slide.create(newSlide, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// app.get('/admin', function(req, res){
//     res.render('admin.ejs', {admin: admin});
// });

// app.get('/admin/add', function(req, res){
//     res.render('add.ejs');
// });

// app.post('/admin', function(req, res){
//     var name = req.body.name;
//     var image = req.body.image;
//     var newAdmin = {name:name, image:image};
//     admin.push(newAdmin);
//     res.redirect('/admin');
// });


app.get('/', function(req, res){
    res.render('home.ejs');
});



// app.get('/artist', function(req, res){
//     res.render('artist.ejs');
// });

// app.get('/artist/music', function(req, res){
//     res.render('music.ejs');
// });

// app.get('/artist/music/melody', function(req, res){
//     res.render('member/melody.ejs');
// });

// app.get('/contact', function(req, res){
//     res.render('contact.ejs');
// });

app.get('/login', function(req, res){
    res.render('login.ejs');
});

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }), function(res, res) {
});

app.get('/register', function(req, res){
    res.render('register.ejs');
});

app.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.render('/');
        });
    });
});


// app.get('/signup', function(req, res){
//     res.render('signup.ejs');
// });

// app.post('/signup', function(req, res){
//     var newUser = new User({username: req.body.username});
//     User.signup(newUser, req.body.password, function(err, user){
//         if(err) {
//             console.log(err);
//             return res.render('signup');
//         }
//         passport.authenticate('local')(req, res, function(){
//             res.redirect('/');
//         });
//     });
// });

// app.get('/admin', function(req, res){
//     res.render('admin/admin.ejs');
// });

// app.get('/add', function(req, res){
//     res.render('admin/add.ejs');
// });

// app.get('/payment', function(req, res){
//     res.render('member/payment.ejs');
// });

app.listen('3000', function(req, res){
    console.log('Server is running');
});
