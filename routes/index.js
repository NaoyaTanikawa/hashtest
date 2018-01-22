var express = require('express');
var crypto = require("crypto");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
  //���͕������ϐ��ɕۊ�
  var hashtmp = req.body.hashbefore;
  //�X�g���b�`���O�F�e�X�g�I�ɂP�O�O�O��
  for(let i = 0 ;i <= 1000 ; i++){
    //�n�b�V�������߂�֐��i�g���񂵂��֎~����Ă���̂ŁA���[�v�̓��Ŗ���錾����
    var sha512 = crypto.createHash('sha512');
    //�n�b�V�����v�Z
    sha512.update(hashtmp);
    //�v�Z���ʂ��P�U�i���ɕϊ����ď㏑��
    hashtmp = sha512.digest('hex');
  }
  //���ʂ��y�[�W�ɃZ�b�g
  res.render('index', {title: 'hash',hashResult: hashtmp});
});

module.exports = router;
