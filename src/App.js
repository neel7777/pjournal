import React, { useState } from 'react';
import './App.css';
import { MDBBadge } from "mdbreact";
import { Route, Switch } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import Standings from './Standings';
import NewSesh from './NewSesh';
import Sesh from './Sesh';



function App() {  
  const [total, setTotal] = useState(0)
  const [hours, setHours] = useState(0)
  // const [up, setUp] = useState(true)

  return (
    <div className="App">
      
        <h1 className="title"><MDBBadge pill color="default">Poker Sessions Tracker</MDBBadge></h1>
        {/* <Standings setTotal={setTotal} total={total} setHours={setHours} hours={hours} /> */}
      
      <Switch>
        <Route exact path="/">
          <NewSesh setTotal={setTotal} total={total} setHours={setHours} hours={hours} />
        </Route>
        <Route path = '/sessions'>
          <Sesh /> 
        </Route>
      </Switch>
         
     
      
    </div>
  );
}

export default App;












// const [sessions, setSessions] = useState([
  //   {
  //     id: 1,
  //     location: "Parx",
  //     date: "2/2/21",
  //     stakes: "2/5",
  //     buyin: '1000',
  //     cashed: '1040',
  //     start: '6:19PM',
  //     end: '9:10PM',
  //     notes: 'First session back, ran the bluff on jacked harry potter, he open button i flat Jd9c, c/r KT4d6d8x and bet shove'

  //   },
  //   {
  //     id: 2,
  //     location: "Harrahs NC",
  //     date: "2/7/21",
  //     stakes: "2/5",
  //     buyin: '1000',
  //     cashed: '5200',
  //     start: '7:26PM',
  //     end: '12:07am',
  //     notes: 'Super bowl Sunday, had the big hand vs whale KK < K9 on 995K'

  //   }
  // ])
  
  // const addNewSesh = add => {
  //   const newSesh = {
  //     location: add.location,
  //     date: add.date,
  //     stakes: add.stakes,
  //     buyin: add.buyin,
  //     cashed: add.cashed,
  //     start: add.start,
  //     end: add.end,
  //     notes: add.notes
  //   };
  //   setSessions([...sessions, newSesh]);
  // };