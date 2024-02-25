var express = require('express');
var router = express.Router();

router.get('/flyer-1',(req,res,next)=>{
    res.render('flyer',{
        image:'ryokan.jpg',
        topText:'チラシデザインテンプレート',
        btmText:'和風旅館向けチラシデザイン'
    })
});

router.get('/flyer-2',(req,res,next)=>{
    res.render('flyer',{
        image:'bread.jpg',
        topText:'チラシデザインテンプレート',
        btmText:'パン屋向けチラシデザイン'
    })
});

module.exports = router;