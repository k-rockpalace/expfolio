var express = require('express');
var router = express.Router();

router.get('/homepage-1',(req,res,next)=>{
    res.render('homepage',{
        headerTxt:'サンプルサイト：ホームページデザインダウンロードサイト',
        mainHeadTxt:'デザインテンプレート1',
        spImg:'sp-min1.png',
        pcImg:'pc-min1.png',
        mainUnderTxt:'飲食店用のホームページを想定したデザインテンプレートとなります。シックなお店の雰囲気にあわせたデザインとなります。',
        mainRightTop:'サンプルHPデザインテンプレート1'
    })
});

router.get('/homepage-2',(req,res,next)=>{
    res.render('homepage',{
        headerTxt:'サンプルサイト：ホームページデザインダウンロードサイト',
        mainHeadTxt:'デザインテンプレート2',
        spImg:'sp-min2.png',
        pcImg:'pc-min2.png',
        mainUnderTxt:'Tシャツ販売店用のホームページを想定したデザインテンプレートとなります。特にロックTシャツを取り扱うお店にあわせたデザインとなります。',
        mainRightTop:'サンプルHPデザインテンプレート2'
    })
})

module.exports = router;
