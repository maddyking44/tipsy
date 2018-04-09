exports.seed = function (knex, Promise) {
    return knex('languages').del()
      .then(function () {
    return knex('languages').insert([
      {id:1, english: true, spanish: true, te_reo: false, user_id: 1},
      {id:2, english: true, spanish: false, te_reo: false, user_id: 2},
      {id:3, english: false, spanish: true, te_reo: true, user_id: 3},
      {id:4, english: true, spanish: false, te_reo: true, user_id: 4},
      {id:5, english: false, spanish: true, te_reo: false, user_id: 5}
            ]
      )})
}

