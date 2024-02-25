var express = require('express');
var router = express.Router();
const fs = require('fs');

const fileName = 'data.json';
var mainInfo;
readFromFile(fileName);

function readFromFile(fileName){
  fs.readFile(fileName,'utf8',(err,data)=>{
    mainInfo = data;
  });
}

/* GET home page. */
router.get('/',(req, res, next)=>{
  const mainInfoContent = JSON.parse(mainInfo).sort((x,y)=>(new Date(y.date).getTime()) - (new Date(x.date).getTime()));
  const slideInfo = mainInfoContent.slice(0,5);

  console.log(mainInfo);
  res.render('index',{
    title: 'ポートフォリオ用サンプルサイト',
    mainContent:mainInfoContent,
    slideContent:slideInfo,
  });
});

module.exports = router;
