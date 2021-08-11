import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';


const Sesh = props => {
    
    const [sesh, setSesh] = useState([])
    
    
    useEffect(() => {
        axios.get('http://localhost:5000/sessions')
        .then((res)=> {
            console.log(res.data)
            
            setSesh(res.data)
           
                     

            
            
        })
        .catch(error => console.log(error.response))

    }, [])
    
    return(
        //<div>Hi</div>
        <div className="sessions">
            {sesh.map(info => (
                <div key={sesh.id} className='session' >
                    <h3>Location: {info.location}</h3>
                    <h3>Date: {info.date}</h3>
                    <h3>Stakes: {info.stakes}</h3>
                    <h3>Buyin: {info.buyin}</h3>
                    <h3>Cashed: {info.cashed}</h3>
                    <h3>Start: {info.start}</h3>
                    <h3>End: {info.end}</h3>
                    <h3>Notes: {info.notes}</h3>
                </div>
            ))}
        <Link to='/'>
        <Button className='buttons' size="large" variant='contained' color='secondary'>New Session</Button>
        </Link>
        </div>
        
    )
}

export default Sesh;