var express = require('express');
var router = express.Router();

router.get('/data', function(req, res, next) {
  var contacts = [
      {
          name: '孔祥海',
          nameFirstWordChr: 'k',
          nameAllWordChr: 'kxh',
          mobilePhone:'13755555555',
          corp: 'shgbit',
          mail: 'kongxianghai@shgbit.com'
      },
      {name: '可汗', nameFirstWordChr: 'k', nameAllWordChr: 'kh',mobilePhone:'13744444444', corp: '蒙古国皇室', mail: 'kehan@mg.com'},
      {name: '宽己敏', nameFirstWordChr: 'k', nameAllWordChr: 'khm',mobilePhone:'13711111111', corp: '大金', mail: 'kjm@dj.com'},
      {name: '阿房女', nameFirstWordChr: 'a', nameAllWordChr: 'epn',mobilePhone:'13733333333', corp: '大秦', mail: 'epn@dq.com'}
  ];
  
  res.json(contacts);
});

module.exports = router;