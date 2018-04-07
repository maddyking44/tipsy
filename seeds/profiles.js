exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
return knex('profiles').insert([
      {id:1, firstname: 'Libby', lastname: 'lobster', tagline: 'Loves life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '1'},
      {id:2, firstname: 'Milly', lastname: 'meadow', tagline: 'Millin around', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '2' },
      {id:3, firstname: 'Percy', lastname: 'potter', tagline: 'Garden is life', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '3' },
      {id:4, firstname: 'Alejandro', lastname: 'alabaster', tagline: '420', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '4' },
      {id:5, firstname: 'Tina', lastname: 'turna', tagline: 'Gettin turnt', email: 'libby@lobster.clam', profilepic: 'https://libbiethelobster.files.wordpress.com/2015/03/unnamed-3.jpg' , language_id: '5' }
            ]
      )})
}