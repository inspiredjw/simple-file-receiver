var express = require('express');
var router = express.Router();

/* POST wow */
router.post('/', function(req, res, next) {
  var tmp_path = req.files.thumbnail.path;
  // set where the file should actually exists - in this case it is in the "images" directory
  var target_path = './public/images/' + req.files.uploaded.name;
  // move the file from the temporary location to the intended location
  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
    // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
    fs.unlink(tmp_path, function() {
        if (err) throw err;
        res.send('File uploaded to: ' + target_path + ' - ' + req.files.uploaded.size + ' bytes');
    });
  });
});

module.exports = router;
