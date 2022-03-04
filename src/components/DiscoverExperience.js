import React from 'react'
import {Grid} from '@mui/material';
import './DiscoverExperience.css';

const DiscoverExperience = () => {
  return (
    <div style={{width:'90%',margin:'auto'}}>
        <Grid container>
            <Grid item style={{marginTop:100,fontSize:35,fontWeight:'500'}}>Discover Airbnb Experiences</Grid>
        </Grid>
    <br/>
<Grid container>
    <Grid item sm={6}>
        <div className='mountain_todo'>
            <Grid container>
                <Grid item sm={6}>
                    <h2 style={{textAlign:'left',marginLeft:40,fontSize:40,color:'white'}}>Thing to do on your trip</h2>
                    <button style={{height:50,width:170,borderRadius:10,border:'none',fontSize:17,fontWeight:'bold'}}>Experiences</button>
                </Grid>
            </Grid>
        </div>
    </Grid>
    <Grid item sm={6}>
    <div className='home_todo'>
    <Grid container>
                <Grid item sm={6}>
                    <h2 style={{textAlign:'left',marginLeft:40,fontSize:40,color:'white'}}>Thing to do from home</h2>
                    <button style={{height:50,width:190,borderRadius:10,border:'none',fontSize:17,fontWeight:'bold'}}>Online Experiences</button>
                </Grid>
            </Grid>

    </div>
    </Grid>
    
</Grid>
    </div>
  )
}

export default DiscoverExperience