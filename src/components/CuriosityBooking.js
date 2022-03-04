import React from 'react'
import './CuriosityBooking.css';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const CuriosityBooking = () => {
  return (
    <div style={{width:'90%',margin:'auto'}} className='booking_component'>

<Grid conatiner>
            <Grid item m={'auto'}>
                <p style={{color:'white',fontSize:40,fontWeight:'bold',paddingTop:'40%'}}>Let your curiosity do the booking</p>
                <button className='flexible_btn' style={{height:60,width:160,borderRadius:40,fontSize:18,borderColor:'white'}}>I'm flexible</button>
            </Grid>

        </Grid>


    </div>
  )
}

export default CuriosityBooking