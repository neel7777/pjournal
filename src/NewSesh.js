import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const NewSesh = props => {
  
  
  const [sesh, setSesh] = useState({
      
      location: '',
      date: '',
      stakes: '',
      buyin: '',
      cashed: '',
      start: '',
      end: '',
      notes: ''

  })

  const baseState = sesh;
 
  
  
    const handleChange = e => {
        setSesh({...sesh, [e.target.name]: e.target.value })
        

    }

    const resetForm = () => {
        setSesh(baseState)
    }
    

    

    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(sesh)
        
        axios.post('http://localhost:5000/sessions', sesh)
        .then((res)=> {
            console.log(res.data)
            
            const currentTotal = props.total
            let profit = (sesh.cashed) - (sesh.buyin)
            
            console.log(profit)
            // console.log(props.up)
            // if (profit > 0) {
            //     props.setUp(true)
            // }
            // else {
            //     props.setUp(false)
            // }  
            // console.log(props.up)
            props.setTotal(currentTotal + profit)
            
        })
        .catch(error => console.log(error))
        
        
        
    }
    

  return (
      <div>
        
        <h1>Enter a new session: </h1>
        <div className="forms">
            <form onSubmit={handleSubmit}>
                <div className="new">
                     
                <input type="text" placeholder="Date" name="date" value={sesh.date} onChange = {e => handleChange(e)}  />
                    
                    
                    
                </div>
                <div className="next">
                    <div>

                    <select name = "location" value={sesh.location} onChange = {e => handleChange(e)} >
                        <option value="choose">Choose Location</option>
                        <option value="TCH">TCH</option>
                        <option value=" Lodge"> Lodge</option>
                        <option value=" Harrahs"> Harrahs</option>
                        <option value=" Parx"> Parx</option>
                        <option value=" MGM"> MGM</option>
                    </select>
                    

                    </div>
                    
                    <div className="stakes">
                    
                    <select name="stakes" value={sesh.stakes} onChange = {e => handleChange(e)}>
                        <option value="choose">Choose Stakes</option>
                        <option value="1-3">1-3</option>
                        <option value="2-5">2-5</option>
                        <option value="5-10">5-10</option>
                    </select>
                    

                    </div>

                    

                </div>
                
               
                <div className='first'>
                    <input type="text" placeholder="Buyin" name="buyin" value={sesh.buyin} onChange = {e => handleChange(e)} />
                    <input type="text" placeholder="Cashed Out" name="cashed" value={sesh.cashed} onChange = {e => handleChange(e)} />
                </div>
                <div className="second">
                    <label> Start: 
                    <input type="time" placeholder="Start" name="start" value={sesh.start} onChange = {e => handleChange(e)} />
                    </label>
                    <label> End: 
                    <input type="time" placeholder="End" name="end" value={sesh.end} onChange = {e => handleChange(e)} />
                    </label>
                </div>
                <div>
                    <h5>Notes:</h5> 
                        <textarea rows={5} cols={50} name="notes" value={sesh.notes} onChange = {e => handleChange(e)} />
                    

                    
                </div>
                
                <Button type='submit' onClick={resetForm} className='buttons' size="large" variant='contained' color='primary'>Submit</Button>
                
                
            </form>
            
            <div className="sessions">
            

            </div>

        </div>  
        
        
        <Link to='/sessions'>
        <Button className='buttons' size="large" variant='contained' color='secondary'>Go to Sessions</Button>
        </Link>
        

    
    </div>   
  );
};

export default NewSesh;