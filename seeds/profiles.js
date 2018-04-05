exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
return knex('profiles').insert([
      {id:1, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , languageid_1, languageid_2, languageid_3 },
      {id:2, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , },
      {id:3, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , },
      {id:4, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , },
      {id:5, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , }
            ]
      )})
}