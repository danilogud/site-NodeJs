const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Contact')
const Contact = mongoose.model('contact')

router.post('/contact', (req, res) =>{
    const newContact ={
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        subject: req.body.subject,
        message: req.body.message
    }
    new Contact(newContact).save().then(()=>{
        req.flash('success_msg', 'Mensagem enviada com sucesso!')
        res.redirect('/')
    }).catch((err)=>{
        req.flash('error_msg', 'Houve um erro ao enviar a mensagem. Tente novamente.' +err)
        res.redirect('/contact')

    })
})

module.exports = router