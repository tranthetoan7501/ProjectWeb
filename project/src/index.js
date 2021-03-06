const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000


//app.use(morgan('combined'))

//static file
app.use(express.static(path.join(__dirname,'public')))

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname,'resource/views'));





app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/product', (req, res) => {
  res.render('product');
})

app.get('/detail', (req, res) => {
  res.render('detail');
})

app.get('/sign-in', (req, res) => {
  res.render('sign-in');
})

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})