const express = require('express')
const router = new express.Router()
const yup = require('yup')
const schema = require('../model/schema.js')
const nanoid = require('nanoid')

router.use(express.static('./public'))

// Getting A Short URL
router.get('/url/:id', (req, res) => {

})

// Redirecting a URL 
router.get('/:id', (req, res) => {

})

//Create a short url 
router.post('/url', async (req, res, next) => {
    const {slug, url} = req.body
    try {
        await schema.validate({
            slug,
            url,
        });
        if (!slug){
            slug = nanoid();
        }
        slug = slug.toLowerCase();
        res.json({
            slug,
            url,
        })
    }catch(error){
        next(error)
    }
})

router.use((error, req, res, next) => {
    if (error.status)
        res.status(error.status)
    else
        res.status(500);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'Working' : error
    })
})

module.exports = router 