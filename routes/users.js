const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'image'});

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post('/profiles', upload.single('user-image'),function(req, res){
  const uploadedImageFile = req.file;
  const userName = req.body;

  console.log(uploadedImageFile);
  console.log(userName);
  res.redirect('/');
});
module.exports = router;