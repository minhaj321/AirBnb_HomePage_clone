import React from 'react'
import {Grid} from '@mui/material';
import './DetailSection.css';

const DetailSection = () => {
  return (
      <div style={{background:'#F7F7F7'}}>
          <br/>
    <div style={{width:'90%',margin:'auto',textAlign:'left',fontSize:15}}>
        <Grid container>
            <Grid item sm={3}>

            <div>
                <p style={{fontWeight:'bold',marginBottom:0}}>Support</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Help Center</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Safety information</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Cancellation options</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Our COVID-19 Response</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Supporting people with disabilities</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Report a neighborhood concern</p>
            </div>

            </Grid>
            <Grid item sm={3}>
                
            <div>
                <p style={{fontWeight:'bold',marginBottom:0}}>Community</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Airbnb.org: disaster relief housing</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Support Afghan refugees</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Combating discrimination</p>
            </div>

            </Grid>
            <Grid item sm={3}>

            <div>
                <p style={{fontWeight:'bold',marginBottom:0}}>Hosting</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Try hosting</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>AirCover: protection for Hosts</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Explore hosting resources</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Visit our community forum</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>How to host responsibly</p>
            </div>

                </Grid>
            <Grid item sm={3}>
                
            <div>
                <p style={{fontWeight:'bold',marginBottom:0}}>About</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Newsroom</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Learn about new features</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Letter from our founders</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Careers</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Investors</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Airbnb Luxe</p>
            </div>

                </Grid>
        </Grid>
        <br/><br/>
        <hr style={{ height: '1px',backgroundColor: '#ccc',border: 'none'}}/>
        <br/>
    </div>
    </div>
  )
}

export default DetailSection