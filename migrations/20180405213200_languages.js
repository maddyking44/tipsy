
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('languages', (table) => {
        table.increments('id').primary()
        table.string('language_1')
        table.string('language_2')
        table.string('language_3')
})
};

exports.down = function(knex, Promise) {
  
};
