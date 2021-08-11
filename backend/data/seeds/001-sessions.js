
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sessions').del()
    
      // Inserts seed entries
      await knex('sessions').insert([
        {id: 1, 
        location: "Parx",
        date: "2/2/21",
        stakes: "2/5",
        buyin: '1000',
        cashed: '1040',
        start: '6:19PM',
        end: '9:10PM',
        notes: 'First session back, ran the bluff on jacked harry potter, he open button i flat Jd9c, c/r KT4d6d8x and bet shove'},
        {id: 2, 
        location: "Harrahs NC",
        date: "2/7/21",
        stakes: "2/5",
        buyin: '1000',
        cashed: '5200',
        start: '7:26PM',
        end: '12:07am',
        notes: 'Super bowl Sunday, had the big hand vs whale KK < K9 on 995K'},
        
      ]);
    
};
