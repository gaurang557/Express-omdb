const express = require('express');
const router = express.Router();
const axios=require('axios')
const apikey= 'a0e14d81'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/search', function(req, res, next) {
    const search =req.query.title;
    const url = 'https://www.bing.com'
    axios.get(url)
    .then(function (response){
        res.send(response.data)
    })
    .catch(function (error){
        res.send(error)
    })
});

module.exports = router;
