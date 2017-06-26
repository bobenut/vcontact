var express = require('express');
var router = express.Router();
var reqParamsGetter = require('./reqParamsGetter.js');

var contacts = [
    {
      _id: '1',
      name: '孔祥海',
      nameFirstWordChr: 'k',
      nameAllWordChr: 'kxh',
      mobilePhone:'13755555555',
      corp: 'shgbit',
      mail: 'kongxianghai@shgbit.com'
    },
    {_id: '2', name: '可汗', nameFirstWordChr: 'k', nameAllWordChr: 'kh',mobilePhone:'13744444444', corp: '蒙古国皇室', mail: 'kehan@mg.com'},
    {_id: '3', name: '宽己敏', nameFirstWordChr: 'k', nameAllWordChr: 'khm',mobilePhone:'13711111111', corp: '大金', mail: 'kjm@dj.com'},
    {_id: '4', name: '阿房女', nameFirstWordChr: 'a', nameAllWordChr: 'epn',mobilePhone:'13733333333', corp: '大秦', mail: 'epn@dq.com'}
];
  

router.get('/data', function(req, res, next) {
  res.json(contacts);
});

router.delete('/data', function(req, res, next) {
  var reqParams = reqParamsGetter.get(req);
  console.log('start to remove contact: %s', JSON.stringify(reqParams, null, 2));

  var contactId = reqParams.body.contactId;

  var findedIndex = -1;
  for(var i = 0; i < contacts.length; i++) {
    if(contacts[i]._id === contactId) {
      findedIndex = i;
      break;
    }
  }

  if(findedIndex >= 0) {

    var removedContact = contacts.splice(i, 1);
    console.log('finded&removed: %s', removedContact);
    res.json({result: 'done', data: removedContact});
  } else {
    console.log('not finded');
    res.json({result: 'failed', err: new Error('can\'t find contact')});
  }
});

module.exports = router;