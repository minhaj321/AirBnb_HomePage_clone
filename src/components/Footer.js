import React from 'react'
import './Footer.css';
import {Grid} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div style={{width:'90%',margin:'auto',textAlign:'left'}}>
        <Grid container>
        <Grid item sm={4}>
        <div style={{fontSize:15}} className='footer_copy_section'>
            <span>© 2022 Airbnb, Inc.</span>
            <span className='footer_dot'> . </span>
            <span>Privacy</span>
            <span className='footer_dot'> . </span>
            <span>Terms</span>
            <span className='footer_dot'> . </span>
            <span>Sitemap</span>
        </div>
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={1}></Grid>
        <Grid item sm={1}>
            <div style={{display:'flex',marginTop:2,marginLeft:-60}}>
            <span><LanguageIcon  fontSize='small'/></span>
            <span style={{fontSize:14,marginLeft:10,textDecoration:'underline',fontWeight:'500'}}>English(US)</span>
            </div>
        </Grid>
        <Grid item sm={1}>
            <div>
                <span style={{textDecoration:'underline',fontSize:14,marginLeft:-20,fontWeight:'500',float:'left',marginTop:2}}>$ USD</span>
                </div>
            </Grid>
        <Grid item sm={1}>
                <span style={{marginLeft:-20}}><FacebookIcon/> </span>
                <span style={{marginLeft:15}}> <TwitterIcon/> </span>
                <span style={{marginLeft:10}}> <InstagramIcon/> </span>

        </Grid>
        </Grid>
        <br/>
        <br/>
    </div>
  )
}

export default Footer