const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()
const path = require('path')
const flash = require('connect-flash')
const admin = require('./routes/admin')
const contact = require('./routes/contact')

// Config
    // Sessão
        app.use(session({
            secret: 'sitetech',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())

    // Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.error = req.flash('error')
            next()
        })    

    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
        runtimeOptions:{
            allowProtoMethodsByDefault: true,
            allowProtoPropertiesByDefault: true,
        }
    }))
        app.set('view engine', 'handlebars')

    // Public
       app.use("/public", express.static('public'))
    // Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/siteTech-master').then(()=>{
            console.log("Conectado ao mongo")
        }).catch((err)=>{
            console.log("Erro ao conectar" +err)
        })

    // Rotas
        app.get('/', (req, res)=>{
            res.render("index")
        })

        app.get('/produtos', (req, res)=>{
            res.render('produtos/index')
        })

        app.get('/about', (req, res) =>{
            res.render('contato/about')
        })

        app.get('/contact', (req, res)=>{
            res.render('contato/index')
        })

        app.use('/admin', admin)
       

    const PORT = 8081
    app.listen(PORT, ()=>{
        console.log("Servidor rodando")
    })