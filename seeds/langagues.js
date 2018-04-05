exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
    return knex('profiles').insert([
      {id:1, english: true, spanish: true, te_reo: false},
      {id:2, english: true, spanish: false, te_reo: false},
      {id:3, english: false, spanish: true, te_reo: false},
      {id:4, english: true, spanish: false, te_reo: false},
      {id:5, english: false, spanish: true, te_reo: false}
            ]
      )})
}

