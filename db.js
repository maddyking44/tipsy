const config = require('./knexfile').development
const db = require('knex')(config)

function getProfileByID (id) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", id)
    .select().first()
}

function getProfileByQuery (query) {
    // const conn = testDb || db
    return db("profiles")
    .where ("id", query.id)
    .select().first()
}

function insertLanguage (languageArray) {
    console.log(languageArray)
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

function getMatches (user, profile) {
    return db("matches")
        .insert({user_id: user, match_id: profile})
        

}

module.exports = {
    getProfileByID,
    getProfileByQuery,
    insertLanguage
}

