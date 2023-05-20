var express = require('express');
var router = express.Router();

ROOT_URL= 'https://api.chucknorris.io/jokes'
/* GET home page. */
router.get('/', async function(req, res, next) {
  let randomJoke = await fetch(`${ROOT_URL}/random`)
  .then(res => res.json())
  res.render('index', { randomJoke });
});

module.exports = router;
