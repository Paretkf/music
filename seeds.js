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
var Collection   = require('./models/collection');
var data =[
    {
        artist      : 'Three Man Down',
        imageArt    : 'https://i.pinimg.com/236x/b5/f4/f4/b5f4f498a18f47a95ebcf1aa64cdc30f.jpg',
        music       : 'ฝนตกไหม',
        imageMu     : 'https://i.pinimg.com/564x/93/2f/c2/932fc260b9f112718153f2de9e0222db.jpg',
        melody      : 'ฝนตกอีกแล้วคืนนี้ คงหนาวกว่าคืนไหนไหน ตัวฉันก็ใช้ชีวิตไป แค่ผ่านผ่านไป เท่านั้น เท่านั้น ก็คิดถึงเธออยากรู้ว่าเธอน่ะเป็นเช่นไร ตัวฉันก็เลยกดเบอร์โทรไป แบบไม่ตั้งใจ เท่านั้น เท่านั้น แค่อยากจะรู้ว่าตรงที่เธอยืนนั้นมีฝนตกไหม สบายดีไหม เธอกลัวฟ้าร้องหรือเปล่า ถ้าหากตรงนั้นไม่มีใคร ฉันพร้อม ฉันพร้อมจะไป ในคืนที่ฝนโปรยลงมา อากาศชื้นนะคืนนี้ระวังหนาวนะแบบนี้  ฉันกลัวเธอจะไม่สบาย ที่โทรมาหาเธอกดมาแบบไม่ได้ตั้งใจ ไม่ได้คิดอะไรแค่กลัวเธอไม่สบาย อะ (เท่านั้น) เท่านั้น แค่อยากจะรู้ว่าตรงที่เธอยืนนั้นมีฝนตกไหม สบายดีไหม เธอกลัวฟ้าร้องหรือเปล่า หากตรงนั้นไม่มีใคร ฉันพร้อม ฉันพร้อมจะไป แต่ฉันก็รู้ดีว่าข้างข้างเธอนั้นมีเขาใช่ไหมและ คนคนนั้น ดูแลเธอดีหรือเปล่าถ้าเธอยิ้มฉันก็ดีใจแค่ตรงนี้ ฉันไม่มีใคร ในคืนที่ฝนโปรยลงมา ฮู้ โฮ้โฮ เท่านั้น เท่านั้น แค่อยากจะรู้ว่าตรงที่เธอยืนนั้นมีฝนตกไหม สบายดีไหม เธอกลัวฟ้าร้องหรือเปล่า ถ้าหากตรงนั้นไม่มีใคร ฉันพร้อม ฉันพร้อมจะไป แต่ฉันก็รู้ดีว่าข้างข้างเธอนั้นมีเขาใช่ไหม และคนคนนั้น ดูแลเธอดีหรือเปล่า ถ้าเธอยิ้มฉันก็ดีใจ แค่ตรงนี้ฉันไม่มีใคร ในคืนที่ฝนโปรยลงมา ในคืนที่ฝนโปรยลงมา'
    }
];

function seedDB(){
    Collection.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log('remove DB completed');
        data.forEach(function(seed){
            Collection.create(seed, function(err, collection){
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