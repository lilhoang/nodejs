const {Console} = require('console')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.engine('hbs', expressHandlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
}))
app.set('view engine', 'hbs')
app.set('views', './views')

const holidays = [
    {
        tilte: 'New Year',
        path: 'tet.jpg',
        icon: 'fa-solid fa-champagne-glasses',
        link: '/holiday/0'
    },
    {
        tilte: 'Mid-Autumn',
        path: 'moon.jpg',
        icon: 'fa-solid fa-moon',
        link: '/holiday/1'
    },
    {
        tilte: 'Chirstmas',
        path: 'christmas.webp',
        icon: 'fa-solid fa-candy-cane',
        link: '/holiday/2'
    }   
]

app.get('/', (req,res) =>{
    res.render('home',{holidays})
})

app.get('/holiday/:index', (req,res) =>{
    res.render('holiday',{holiday: holidays[req.params.index]})
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}`
))