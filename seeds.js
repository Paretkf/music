var mongoose    = require('mongoose');
var Slide       = require('./models/slide');
var data =[
    {
        image: 'https://i.pinimg.com/564x/48/4b/6a/484b6ab6243de8d65380b5742ede17e4.jpg',
        class: "carousel-item active"

    },

    {
        image: 'https://i.pinimg.com/564x/50/df/a0/50dfa0ec1251489035c6fa86fd2332a4.jpg',
        class: "carousel-item"
    },
    
    {
        image: 'https://i.pinimg.com/564x/85/c4/6f/85c46f7efb8ea54fa42236836e0a3d84.jpg',
        class: "carousel-item"
    },
    
];

function seedDB(){
    Slide.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log('remove DB completed');
        data.forEach(function(seed){
            Slide.create(seed, function(err, slide){
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