var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var hbs = require('express-handlebars')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
var config = require('./knexfile').development
var db = require('knex')(config)
var person = []

//get handlebars working
var hbsConfig = {
    extname: 'hbs'
  }
server.engine('hbs', hbs(hbsConfig)) 
server.set('view engine', 'hbs')

//render the formgit 
server.get('/', function (req, res) {
   res.render('form')
})

server.post('/displayPage', function (req, res) {
//get data from form.html and put each part into variables
    var data = req.body 
    person = {
        firstname: data.firstname,
        tagline: data.tagline,
        profilepic: data.profilepic
        // email: data.email 
    }
    console.log(person)
    // var profilepic = data.profilepic
    res.redirect('/displayPage')
})

//render the displayPage
server.get('/displayPage', function (req, res) {
    res.render('displayPage', person)
})

//put language data in db
// server.post('/displayPage', function (req, res) {
//     var formData = req.body

//     res.redirect('/')
// })









module.exports = server