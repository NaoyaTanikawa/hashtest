var express = require('express');
var crypto = require("crypto");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
  //入力文字列を変数に保管
  var hashtmp = req.body.hashbefore;
  //ストレッチング：テスト的に１０００回
  for(let i = 0 ;i <= 1000 ; i++){
    //ハッシュを求める関数（使い回しが禁止されているので、ループの頭で毎回宣言する
    var sha512 = crypto.createHash('sha512');
    //ハッシュを計算
    sha512.update(hashtmp);
    //計算結果を１６進数に変換して上書き
    hashtmp = sha512.digest('hex');
  }
  //結果をページにセット
  res.render('index', {title: 'hash',hashResult: hashtmp});
});

module.exports = router;
