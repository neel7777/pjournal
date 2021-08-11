const express = require('express');
const cors = require('cors');


const seshRouter = require('./helpers/sessions-router')

const server = express();
server.use(cors());
server.use(express.json());

server.use('/sessions', seshRouter)
server.get('/', (req,res) => {
    res.send('Hello from exess')
});

// const sendUserError = (msg, res) => {
//     res.status(422);
//     res.json({ Error: msg });
//     return;
//   };

//let seshId = sessions.length;
// const sessions = [
//     {
//       id: 1,
//       location: "Parx",
//       date: "2/2/21",
//       stakes: "2/5",
//       buyin: '1000',
//       cashed: '1040',
//       start: '6:19PM',
//       end: '9:10PM',
//       notes: 'First session back, ran the bluff on jacked harry potter, he open button i flat Jd9c, c/r KT4d6d8x and bet shove'

//     },
//     {
//       id: 2,
//       location: "Harrahs NC",
//       date: "2/7/21",
//       stakes: "2/5",
//       buyin: '1000',
//       cashed: '5200',
//       start: '7:26PM',
//       end: '12:07am',
//       notes: 'Super bowl Sunday, had the big hand vs whale KK < K9 on 995K'

//     }
//   ]
  





// server.get('/sessions', (req, res) => {
    
    
//     res.status(200).json(sessions)
// });

// server.post('/newsesh', (req, res) => {
//     const { location, date, stakes, buyin, cashed, start, end, notes } = req.body;
//     const newSesh = { location, date, stakes, buyin, cashed, start, end, notes, id: seshId };
//     if (!location || !stakes || !date || !buyin || !cashed || !start || !end || !notes) {
//       return sendUserError(
//         'Please fill all fields to create a session in the session DB.',
//         res
//       );
//     }
    
  
//     sessions.push(newSesh);
//     seshId++;
//     res.json(sessions);
//   });

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000')

});