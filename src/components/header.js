import React from 'react'
import { Grid } from '@mui/material'
import './header.css'
import Image from './../Assets/airbnb_logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div className='headeR_component'>
        <Grid container>
            <Grid item sm={2}>
                <img src={Image} className='header_icon'/>
            </Grid>
            <Grid item sm={1}></Grid>
            <Grid item sm={5}>
                <ul className='header_list'>
                    <li>Places to stay</li>
                    <li>Experiences</li>
                    <li>Online Experiences</li>
                </ul>
            </Grid>
            <Grid item sm={2}>
                <div className='header_host_txt_div'>
                <span className='header_host_txt'>Become a host</span>
                </div>
            </Grid>
            <Grid item sm={2}>
                <span><LanguageIcon className='header_globe_icon' fontSize='small'/></span>
                <div className='header_avatar_div'>
                
                <div className='header_menu_icon_div'>
                <span className='header_menu_icon_div'><MenuIcon className='header_menu_icon' fontSize='small'/></span> 
                </div>

                <div className='header_avatar_icon_div'>
                <span><AccountCircleIcon className='header_avatar_icon' fontSize='large'/></span>                
                </div>               
                <div className='badge'></div>
                </div>
                </Grid>
        </Grid>
    </div>
  )
}

export default Header