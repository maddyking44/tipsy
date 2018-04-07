const config = require('./knexfile').development
const db = require('knex')(config)
const server = require('./server')
const express = require('express')
const router = express.Router()

//login page with Libby default user
router.get('/', function (req, res) {
    db("profiles")
    .where("id", 1)
    .select().first()
    .then(user1 => {
        console.log(user1)
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

    db("profiles")
      .insert(userData)
      .then(newProfileId => {
          console.log({newProfileId})
          res.redirect('/')

          //need to carry id through
          //need to send languages data to languages db
          //should redirect to /profiles/:id
    })
})

// View all users to match
    router.get('/profiles/:id', function (req, res) {
        db("profiles")
        .where("id", req.params.id)
        .select().first()
        .then(loggedInUser => {
            db("profiles")
            .select()
            .then(allProfiles => {
                console.log({loggedInUser})
                console.log(allProfiles)
                res.render('allProfiles', {loggedInUser: loggedInUser, allProfiles: allProfiles})
            })
        })
})


//render the form
router.get('/user/:id/edit', function (req, res) {
   res.render('form')
})



//edit existing user data in db
//     router.post('/displayPage', function (req, res) {
//         var formData = req.body

//     db("profiles")
//         .insert(formData)
//         .then(newProfileId => {
//             console.log({newProfileId})
//             res.redirect('/displayPage/:id')
//     })
// })


module.exports = router
