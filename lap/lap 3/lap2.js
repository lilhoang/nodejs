const express = require('express')
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(cookieParser())

app.use(session({resave:false, saveUninitialized: false, secret: 'keyboard cat'}))

app.get('/home', ( req, res) => {
     res.render('home', { 
        message: 'Welcome to the new year holidays',    
    })
})

app.get('/tetholiday', (req,res) => {
    res.render('tetholiday', {
        message: 'Welcome to the 2022 tet holidays', 
        userid: req.cookies.userid,
        username: req.session.username  
    })
})

app.get('/christmas', (req,res) => {
    res.render('christmas', {
        message: 'Welcome to the Christmas', 
        userid: req.cookies.userid,
        username: req.session.username  
    })
})

app.get('/set-random-userid', (req,res) =>{
    res.cookie('userid', (Math.random()*10000).toFixed(0))
    res.redirect('back')
})

app.get('/set-random-username', (req,res) => {
    req.session.username = catNames.random()
    res.redirect('back')
})


app.listen(port, () => console.log(
    `express started on http://localhost:${port}/greeting\n`
))