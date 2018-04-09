var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)
const dab = require('./db')
const server = require('./server')
const express = require('express')
const router = express.Router()

//login page with Libby default user
router.get('/', function (req, res) {
    db("profiles")
    .where("id", 1)
    .select().first()
    .then(user1 => {
        res.render('login', user1)
    })

})

//Add new user page
router.get('/user/new', function (req, res) {
    res.render('newUser')
})

//put new user data in db
router.post('/user/new', function (req, res) {
    var userData = req.body
    var languageArray = req.body.language
    dab.insertLanguage(languageArray)
        .then(id => {
            db("profiles")
                .insert({firstname: userData.firstname,
                    lastname: userData.lastname,
                    tagline: userData.tagline,
                    email: userData.email,
                    profilepic: userData.profilepic
                })
                .then(newProfile => {
                   res.redirect('/profiles/' + newProfile)
            })
        })
  
})



// User can view all profiles to match
router.get('/profiles/:id', function (req, res) {
    dab.getProfileByID(req.params.id)
    .then(loggedInUser => {
        db("profiles")
        .select()
        .then(allProfiles => {
            res.render('allProfiles', {loggedInUser: loggedInUser, allProfiles: allProfiles})
        })
    })
})

//user can view a particular profile
router.get("/profiles/:id/view", function (req, res) {
    var query = req.query
    var id = req.params.id
    dab.getProfileByQuery(query)
    .then(profile=> {
        res.render("oneProfile", {profile: profile, id:id})
    })
})



//user can match with other users
router.post("/profiles/:id/view", function (req, res) {
    var id = req.params.id

    // gets the user id of the match profile from query in url
    var query = req.query
    var queryArray = Object.entries(query)
    var queryItem = queryArray[0][0]
    var queryPieces = queryItem.split("")
    var queryNum = queryPieces[0]
   
        dab.getProfileByTrickyID(id)
        .then(subject => {
            dab.pushMatch(id, queryNum)
            .then(thing => {
                dab.checkMatches(id, queryNum)
                .then(success => {
                    if (success[0]){
                        res.redirect("/success")}
                    else res.redirect("/profiles/" + req.params.id)
                     })
                })
            })
     
    })

//success page
router.get("/success/", function (req, res) {
    res.render("success")
})


//user can view own profile
router.get("/user/:id", function (req, res) {
    dab.getProfileByID(req.params.id)
        .then(user => {
            res.render("user", user)
        })
})

// user can view edit form to edit own profile
router.get('/user/:id/edit', function (req, res) {
   dab.getProfileByID(req.params.id)
   .then(user => {
       res.render('form', user)
   })
})
//need to have form prefilled out instead of placeholder


//user can edit their existing user data in db
    router.post('/user/:id/edit', function (req, res) {
        var userData = req.body
        var languageArray = req.body.language
        dab.getLanguageByID(req.params.id)
            .then(user => {
                dab.updateLanguage(languageArray, user.id)
                    .then(id => {
                        dab.getProfileByID (req.params.id)
                                .update({firstname: userData.firstname,
                                lastname: userData.lastname,
                                tagline: userData.tagline,
                                email: userData.email,
                                profilepic: userData.profilepic})
                                .then(userId => {
                                res.redirect('/profiles/1')
                                })
                        })
                })
})


module.exports = router
