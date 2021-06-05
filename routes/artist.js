var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    multer      = require('multer'),
    passport    = require('passport'),
    path        = require('path'),
    storage     = multer.diskStorage({
                destination: function(req, file, callback){
                    callback(null,'./public/uploads/');
                },
                filename: function(req, file, callback){
                    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                }
            }),

    imageFilter = function (req, file, callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
            return callback(new Error('Only JPG, jpeg, PNGm and GIF image files are allowed!'), false);
        }
        callback(null, true);
    },
    upload  = multer({storage: storage, fileFilter: imageFilter}),        
    Artist  = require('../models/artist');
    

router.get('/', function(req, res){
    Artist.find({}, function(err, allArtist){
        if(err){
            console.log(err);
        } else{
            res.render('artist.ejs', {artist: allArtist});
        }
    });
});

router.post('/', upload.single('image'), function(req, res){
    req.body.artist.image = '/uploads/'+ req.file.filename;
    
    Artist.create(req.body.artist, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/artist');
        }
    });
});    


// router.get('/:id', function(req, res){
//     Artist.findById(req.params.id, function(err, foundArtist){
//         if(err){
//             console.log(err);
//         } else{
//             res.render('edit.ejs', {artist: allArtist});
//         }
//     });
// });

//ไปหน้าแก้ไขของแต่ละอัน
router.get('/:id/edit', function(req, res){
    Artist.findById(req.params.id, function(err, foundArtist){
        if(err){
            console.log(err);
        } else {
            res.render('edit.ejs', {artist: foundArtist})
        }
    });
});

router.put('/:id', upload.single('image'), function(req, res){
    if(req.file){
        req.body.artist.image = '/uploads/'+ req.file.filename;
    }
    Artist.findByIdAndUpdate(req.params.id, req.body.artist, function(err, updatedArtist){
        if(err){
            res.redirect('/artist/');
        } else {
            res.redirect('/artist/'+req.params.id);
        }
    });
});

// router.get('/:id/artist', function(req, res){
//     Artist.findById(req.params.id).populate('music').exec(function(err, foundArtist){
//         if(err){
//             console.log(err);
//         } else {
//             res.render("music.ejs", {artist: foundArtist});
//         }
//     });
// });

// router.post('/:id', function(req, res){
    
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