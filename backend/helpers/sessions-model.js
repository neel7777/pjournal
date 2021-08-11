const db = require('../data/db-Config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
    
}

function find() {
    return db("sessions").select(
        'id',
        'location', 
        'stakes', 
        'date',
        'buyin',
        'cashed',
        'start',
        'end',
        'notes'
        );


}

function findById(id){
    return db("sessions").where({ id }).first();
}

function add(session) {
    return db("sessions")
    .insert(session, )  
    .then(each=> {
    //   const [id] = ids
      return find(each);
    });

}

function update(id, changes) {
    return db('sessions')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('sessions')
        .where('id', id)
        .del();
  }