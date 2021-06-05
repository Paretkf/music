// var mongoose    = require('mongoose');
// var Slide       = require('./models/slide');
// var data =[
//     {
//         image: 'https://i.pinimg.com/564x/48/4b/6a/484b6ab6243de8d65380b5742ede17e4.jpg',
//         class: "carousel-item active"

//     },

//     {
//         image: 'https://i.pinimg.com/564x/50/df/a0/50dfa0ec1251489035c6fa86fd2332a4.jpg',
//         class: "carousel-item"
//     },
    
//     {
//         image: 'https://i.pinimg.com/564x/85/c4/6f/85c46f7efb8ea54fa42236836e0a3d84.jpg',
//         class: "carousel-item"
//     },
    
// ];

// function seedDB(){
//     Slide.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log('remove DB completed');
//         data.forEach(function(seed){
//             Slide.create(seed, function(err, slide){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log('new data add');
//                 }
//             });
//         });
//     });
// }

// module.exports = seedDB;

var mongoose    = require('mongoose');
var Artist   = require('./models/artist');
var data =[
    {   
        name      : 'Rstarboy 3',
        image     : 'https://cdn.vox-cdn.com/thumbor/QA7JD779ggaPNzCALqziuw60wis=/0x43:763x425/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/22248294/richie_starboi_ultlrdkev.jpg'},
    {
        name     : 'Justin Bieber',
        image    : 'https://mpics.mgronline.com/pics/Images/563000010160501.JPEG'
    },
    {
        name      : 'Doja Cat',
        image    : 'https://www.nme.com/wp-content/uploads/2020/09/GettyImages-1269775279.jpg'
    },
    {
        name      : 'BTS',
        image   : 'https://korism.com/_upload/news/2018/06/120174/15300991901.jpg'
    },
    {
        name      : 'Ariana Grande',
        image    : 'https://pbs.twimg.com/media/Ekv64WBUYAEnU8F.jpg'
    },
    {
        name     : 'Jawsh 685',
        image    : 'https://variety.com/wp-content/uploads/2020/10/jawsh-685-2_credit-connor-pritchard1.jpg?w=1000'
    },
    {
        name     : 'Finn Askew',
        image    : 'https://images.squarespace-cdn.com/content/v1/5dbe0ad1270af32a3472575f/1608402483638-JW77C7Y5I04VEFSHWFS2/ke17ZwdGBToddI8pDm48kCBllW3mxJGcM2njMWtAmMd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jAoOkRmPE63FUjiJOEKAz5U9gHNL46iYHU_few7p1U0Xt2TpVAeM6sT-baJRoygHA/finn+askew.jpg'
    },
    {
        name      : 'Shawn Mendes',
        image    : 'https://thestandard.co/wp-content/uploads/2020/11/in-wonder-shawn-mendes-netflix.jpg'
    },
    {
        name     : 'John K',
        image    : 'https://www.educatepark.com/wp-content/uploads/2019/10/if-we-never-met2.jpg'
    },
    {
        name      : 'Taylor Swift',
        image    : 'https://mpics.mgronline.com/pics/Images/559000011812401.JPEG'
    },
    {
        name     : 'Bruno Mars',
        image    : 'https://dudeplace.co/wp-content/uploads/2018/09/brunomars.jpg'
    },
    {
        name     : 'Giveon',
        image    : 'https://hips.hearstapps.com/vidthumb/images/2020-elle-songassociation-ep-giveon-tj-v1-ap-v2-fb-1607108053.jpg'
    },
    {
        name     : 'Pink Sweat$',
        image    : 'https://s.isanook.com/jo/0/rp/rc/w850h510/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2pvLzAvdWQvNDgzLzI0MTkyNDEvcGlua3N3ZWF0c3NuLmpwZw==.jpg'
    },
    {
        name      : 'The Weeknd',
        image   : 'https://cms.thaiticketmajor.com/imgUpload/imgeditor/02-the-weeknd-press-2019-cr-Nabil-Elderkin-billboard-1548-compressed.jpg'
    },
    {
        name      : 'Lil Nas X',
        image    : 'https://media.pitchfork.com/photos/60a6c4dd397206388541742f/2:1/w_2560%2Cc_limit/Lil-Nas-X.jpg'
    }
];

function seedDB(){
    Artist.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log('remove DB completed');
        data.forEach(function(seed){
            Artist.create(seed, function(err, artist){
                if(err){
                    console.log(err);
                } else {
                    console.log('new data add');
                }
            });
        });
    });
}

module.exports = seedDB;

// var mongoose    = require('mongoose');
// var Home      = require('./models/home');
// var data =[
//     {
//         no: "1",
//         artist: "Justin Bieber, Daniel Caesar, Giveon",
//         music: "Peaches",
//         imageMu:"http://localhost:3000/images/home1.jpg"
//     },
//     {
//         no: "3",
//         artist: "ROSÉ",
//         music: "Gone",
//         imageMu:"https://image.joox.com/JOOXcover/0/da1cab73156e1afe/300"
//     },
//     {
//         no: "5",
//         artist: "BTS",
//         music: "Dynamite",
//         imageMu:"https://image.joox.com/JOOXcover/0/03a5b7f0c9f69ae6/300"
//     },
//     {
//         no: "7",
//         artist: "Jawsh 685, Jason Derulo, BTS",
//         music: "Savage Love ",
//         imageMu:"https://image.joox.com/JOOXcover/0/b80e0a8bb5eeccfb/300"
//     },
//     {
//         no: "9",
//         artist: "Shawn Mendes",
//         music: "Monster",
//         imageMu:"https://image.joox.com/JOOXcover/0/adc24a2f40533407/300"
//     },
//     {
//         no: "11",
//         artist: "Taylor Swift",
//         music: "willow",
//         imageMu:"https://image.joox.com/JOOXcover/0/9cd766a9bed3f3aa/300"
//     },
//     {
//         no: "2",
//         artist: "ROSÉ",
//         music: "On The Ground",
//         imageMu:"https://image.joox.com/JOOXcover/0/da1cab73156e1afe/300"
//     },
//     {
//         no: "4",
//         artist: "Doja Cat",
//         music: "Kiss Me More",
//         imageMu:"https://image.joox.com/JOOXcover/0/09e602de6fbc09af/300"
//     },
//     {
//         no: "6",
//         artist: "Ariana Grande",
//         music: "34+35",
//         imageMu:"https://image.joox.com/JOOXcover/0/51dd6f3aa524074e/300"
//     },
//     {
//         no: "8",
//         artist: "Finn Askew",
//         music: "Roses",
//         imageMu:"https://image.joox.com/JOOXcover/0/84890e51e2f30c29/300"
//     },
//     {
//         no: "10",
//         artist: "John K",
//         music: "parachute",
//         imageMu:"https://image.joox.com/JOOXcover/0/bda136ffd1f4425b/300"
//     },
//     {
//         no: "12",
//         artist: "Ariana Grande",
//         music: "positions",
//         imageMu:"https://image.joox.com/JOOXcover/0/51dd6f3aa524074e/300"
//     }
// ];

// function seedDB(){
//     Home.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log('remove DB completed');
//         data.forEach(function(seed){
//             Home.create(seed, function(err, home){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log('new data add');
//                 }
//             });
//         });
//     });
// }

// module.exports = seedDB;