import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Standings = props => {
    
    return (
        <div className="standings">
        <MDBCol>
            <MDBCard style={{ width: "25rem" }}>
        
                <MDBCardBody>
                    <MDBCardTitle>Standings</MDBCardTitle>
                    <MDBCardText>
                        Total: {props.total}
                    </MDBCardText>
                    
                    
                    
          
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </div>
      )

    
        
}




export default Standings;