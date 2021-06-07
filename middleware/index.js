// var Artist = require('../models/artist'),
//     // Music  = require('../models/music');

// var middlewareObj = {};

// middlewareObj.checkArtistOwner = function(req, res, next){
//     if(req.isAuthenticated()){
//         Artist.findById(req.params.id, function(err, foundArtist){
//             if(err){
//                 req.flash('error', 'Artist not found!');
//                 res.redirect('back');
//             } else {
//                 if(foundArtist.author.id.equals (req.user.isAdmin)) {
//                     next();
//                 } else {
//                     req.flash('error', 'You do not have permission to do this action.');
//                     res.redirect('back');
//                 }
//             }
//         });
//     } else {
//         req.flash('error', 'You need to sign in first!');
//         res.redirect('back');
//     }
// }

// // middlewareObj.checkMusicOwner = function(req, res, next){
// //     if(req.isAuthenticated()){
// //         Comment.findById(req.params.Music_id, function(err, foundMusic){
// //             if(err){
// //                 req.flash('error', 'Music not found!');
// //                 res.redirect('back');
// //             } else {
// //                 if(foundMusic.author.id.equals(req.user.isAdmin)) {
// //                     next();
// //                 } else {
// //                     req.flash('error', 'You do not have permission to do this action.');
// //                     res.redirect('back');
// //                 }
// //             }
// //         });
// //     } else {
// //         req.flash('error', 'You need to sign in first!');
// //         res.redirect('back');
// //     }
// // }



// middlewareObj.isLoggedIn = function(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash('error', 'You need to sign in first!');
//     res.redirect('/login');
// }

// module.exports = middlewareObj;