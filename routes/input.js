var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/',(req,res,next)=>{
    res.render('input',{
        title:'情報入力',
    })
});

router.post('/',(req,res,next)=>{
    var link = req.body.link;
    var image = req.body.image;
    var title = req.body.title;
    var text = req.body.text;
    var date = req.body.date;
    const info = {
        "link":link,
        "image":image,
        "title":title,
        "text":text,
        "date":date
    }
    fs.readFile('data.json','utf8',(err,data)=>{
        var obj = JSON.parse(data);
        obj.push(info);
        var jsonInfo = JSON.stringify(obj);
        console.log(jsonInfo);
        fs.writeFile('data.json', jsonInfo, (err)=>{
            if(err){
                res.send('書き込み失敗');
            }else{
                res.send('書き込み完了');
            }
        })
    })
});

module.exports = router;