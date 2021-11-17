const express = require('express');
const router = express.Router();
const request = require('request-promise');

const apiLink = 'https://api.opensea.io/api/v1/asset/';

router.get('/', (req, res) => {
    res.render('layout')
})

router.get('/get', (req, res) => {
    var url = req.query.tokenUrl;
    var index = url.indexOf('/');
    var tokenID = '1';

    if (index !== -1) {
        tokenID = url.slice(index+1, url.length)
        url = url.slice(0, index);
    }

    request(`${apiLink}${url}/${tokenID}`)
    .then(data => res.render('token', { imgUrl: JSON.parse(data)['image_url'] }))
    .catch(e => console.error(e))
})

module.exports = {
    router: router
}