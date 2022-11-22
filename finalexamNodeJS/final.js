 const { urlencoded } = require('express')
 const express = require('express')
 const bodyParser = require('body-parser')
 const expressHandlebars = require('express-handlebars')
 const app = express()
 const port = process.env.PORT || 3000

 const urlencodedParser = bodyParser.urlencoded({ extended: false })

 app.use(express.static(__dirname + '/public'))

 app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
 }))
 app.set('view engine', 'handlebars')
 app.set('views', './views')


 app.get('/', (req,res) => res.render('mainhome'))

 app.get('/submit',(req,res) => res.render('homepage'))

 app.post('/submit', urlencodedParser, (req, res) =>{
    console.log('Got body:' ,req.body);
    res.redirect('/')
 })



 app.listen(port, () => console.log(
    `Express started on http://localhost:${port}`
 ))