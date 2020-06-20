const express = require('express')
const router = new express.Router()
const yup = require('yup')

router.use(express.static('./public'))

// Getting A Short URL
router.get('/url/:id', (req, res) => {

})

// Redirecting a URL 
router.get('/:id', (req, res) => {

})

//Create a short url 
router.post('/url', (req, res) => {
    
})

module.exports = router 