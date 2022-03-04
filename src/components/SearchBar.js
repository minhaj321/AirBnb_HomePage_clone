import React from 'react'
import {Grid} from '@mui/material'
import './searchbar.css';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className='search_bar_component'> 
        <Grid container>
        <Grid sm={3} pt={1}>
            <span className='location'>Location</span>
            <p className='where_going'>Where are you going?</p>
        </Grid>

        <Grid sm={1}>
        <Divider style={{float:'left',marginLeft:20,height:40,marginTop:10}} orientation='vertical' flexItem />
        </Grid>

        <Grid sm={2} pt={1}>
        <div style={{marginLeft:-40}}>
        <span className='location'>Check In</span>
        <p className='where_going'>Add dates</p>
        </div>
        </Grid>

        <Grid sm={1}>
        <Divider style={{float:'left',height:40,marginTop:10}} orientation='vertical' flexItem />
        </Grid>

        <Grid sm={2} pt={1}>
        <div style={{marginLeft:-60}}>
        <span className='location'>Check out</span>
        <p className='where_going'>Add dates</p>
        </div>
        </Grid>

        <Grid sm={1}>
        <Divider style={{float:'left',marginLeft:-20,height:40,marginTop:10}} orientation='vertical' flexItem />
        </Grid>

        <Grid sm={2} pt={1} item container>

            <Grid sm={7} item>
        <span className='location' style={{marginLeft:-70}}>Guests</span>
        <p className='where_going' style={{marginLeft:-70}}>Add Guests</p>
            </Grid>

            <Grid sm={5} item>
        <div style={{height:50,width:50,borderRadius:50,background:'#E44561',marginTop:-3,textAlign:'center'}}>
            <SearchIcon fontSize='medium' style={{color:'white',marginTop:12}} />
        </div>
            </Grid>
        </Grid>

        </Grid>
    </div>
  )
}

export default SearchBar