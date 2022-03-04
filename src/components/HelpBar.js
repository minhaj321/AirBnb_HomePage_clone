import React from 'react'
import {Grid} from '@mui/material';
import './helpbar.css';
import Button from '@mui/material/Button';

const HelpBar = () => {
  return (
    <div className='helper_bar_component'>
        <Grid conatiner>
            <Grid item m={'auto'}>
                <p style={{color:'white',fontSize:40,fontWeight:'bold',paddingTop:'10%'}}>Help house 100,000 refugees fleeing Ukraine</p>
                <Button variant="outlined" style={{color:'white',border:'white 1px solid'}}>
  Learn More
</Button>
            </Grid>

        </Grid>
    </div>
  )
}

export default HelpBar