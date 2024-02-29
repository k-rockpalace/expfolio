var express = require('express');
var router = express.Router();

router.get('/hotel-1',(req,res,next)=>{
    res.render('hotel',{
        course:'スタンダード',
        payoff:'1,000円オフ',
        startDate:'2024/02/23 12:00',
        endDate:'2024/02/29 12:00',
        image:'hotel_1_img.jpg',
        hotelName:'名古屋サンプルホテル',
        hotelAddress:'愛知県名古屋市中区栄',
        hotelLink:'/'
    })
})

router.get('/hotel-2',(req,res,next)=>{
    res.render('hotel',{
        course:'プレミアム',
        payoff:'3,000円オフ',
        startDate:'2024/02/23 12:00',
        endDate:'2024/03/02 12:00',
        image:'hotel_2_img.jpg',
        hotelName:'東海サンプルホテル',
        hotelAddress:'愛知県名古屋市中村区名駅',
        hotelLink:'/'
    })
})

module.exports = router;