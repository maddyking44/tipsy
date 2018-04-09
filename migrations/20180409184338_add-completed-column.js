exports.up = function(knex, Promise) {
    return knex.schema.table('languages', function (table) {
        table.integer('user_id');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('languages', function (table) {
        table.dropColumn('user_id');
      })
};