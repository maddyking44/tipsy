var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)

function getProfileByID (id) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", id)
    .select().first()
}

function getProfileByQuery (id) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", id.id)
    .select().first()
}

function getProfileByTrickyID (id) {
    // const conn = testDb || db
    return db("profiles")
    .where("id", id)
    .select().first()
}

function insertLanguage (languageArray) {
    if (languageArray.length = 1) {
    return db("languages")
        .insert({english, spanish, te_reo})
    }
    else {
    var english = !!languageArray.find(language => language == 'english')
    var spanish = !!languageArray.find(language => language == 'spanish')
    var te_reo = !!languageArray.find(language => language == 'te_reo')

    return db("languages")
        .insert({english, spanish, te_reo})
    }
}

function pushMatch (user, profile) {
    return db("matches")
        .insert({"user_id": user, "match_id": profile})
}

function checkMatches (user, profile) {
    return db("matches")
    .where("match_id", "like", user )
    .where("user_id", "like", profile)

}

module.exports = {
    getProfileByID,
    getProfileByQuery,
    getProfileByTrickyID,
    insertLanguage,
    pushMatch,
    checkMatches
}

