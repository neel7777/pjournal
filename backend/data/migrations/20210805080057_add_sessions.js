exports.up = function(knex) {
    return knex.schema
    .createTable('sessions', sessions=>{
        sessions.increments('id').primary();
        sessions.string('location').notNullable();
        sessions.string('date').notNullable();
        sessions.string('stakes').notNullable();
        sessions.string('buyin').notNullable();
        sessions.string('cashed').notNullable();
        sessions.string('start').notNullable();
        sessions.string('end').notNullable();
        sessions.string('notes').notNullable().unique();
    })
    
  };
  
  exports.down = function(knex) {
      return knex.schema
      
      .dropTableIfExists('sessions');
  };
