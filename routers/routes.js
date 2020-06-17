const express = require('express')
const router = new express.Router()


router.get('/', (req, res) => {
    res.json({
        message: 'Make Short Urls'
    })
})

// Getting A Short URL
router.get('/url/:id', (req, res) => {

})

// Redirecting a URL 
router.get('/:id', (req, res) => {

})

//Create a short url 
router.post('/url', (req, res) => {
    
})