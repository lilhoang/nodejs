const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000


app.engine('handlebars', expressHandlebars.engine({
    extname:'.hbs',
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'handlebars')


app.get('/foo', (req, res) => res.render('foo', { layout: null}))



app.get('/', (req,res) => {
    res.send('xin chao minh ten la hoang')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};`
))