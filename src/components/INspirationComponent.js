import React from 'react'
import {Grid} from '@mui/material';
import './INspirationComponent.css'

const INspirationComponent = () => {
  return (
    <div style={{width:'90%',margin:'auto',textAlign:'left'}}>
        <Grid container>
            <Grid item>
            <h2 style={{fontWeight:'500'}}>Inspiration for future getaways</h2>    
            </Grid>    
        </Grid>
        <Grid container>
            <Grid item sm={3}>
                <p style={{fontSize:15,fontWeight:'500'}}>{`Destinations for arts & culture`}</p>
            </Grid>    
            <Grid item sm={3}>
                <p style={{marginLeft:-80,fontSize:15}}>{`Destinations for outdoor adventure`}</p>
            </Grid>    
            <Grid item sm={1}>
                <p style={{marginLeft:-130,fontSize:15}}>{`Mountain cabins`}</p>
            </Grid>   
            <Grid item sm={1}>
                <p style={{marginLeft:-90,fontSize:15}}>{`Beach Destinations`}</p>
            </Grid>    
            <Grid item sm={2}>
                <p style={{marginLeft:-40,fontSize:15}}>{`Popular destinations`}</p>
            </Grid>    
            <Grid item sm={2}>
                <p style={{marginLeft:-80,fontSize:15}}>{`Unique stay`}</p>
            </Grid>    
        </Grid>
        <div style={{display:'flex'}}>
            <hr style={{color:'black',border:'2px solid black',width:'17%'}}/>
            <hr style={{color:'black',width:'83%',marginTop:10}}/>
            </div>
            <br/>
    </div>
  )
}

export default INspirationComponent