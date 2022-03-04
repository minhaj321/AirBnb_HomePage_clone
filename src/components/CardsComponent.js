import React from 'react'
import { Grid } from '@mui/material'
import './CardsComponent.css';
import Image from './../Assets/cards.png';
const CardsComponent = () => {
  return (
    <div>
        <Grid container className='card_component_main'>

        <Grid item sm={3} className='card_component_btn_section'>
            <h1 style={{textAlign:'left',fontSize:40,marginLeft:'20%',marginTop:50}}>Shop Airbnb gift cards</h1>
            <button style={{marginLeft:-50,background:'black',color:'white',height:50,width:150,borderRadius:10,border:'none',fontSize:17,fontWeight:'bold'}}>Learn More</button>

            </Grid> 
        <Grid item sm={1}></Grid>
        <Grid item  sm={8}>
        <img src={Image} className='card_image' />
            </Grid>    
            
        </Grid>
    </div>
  )
}

export default CardsComponent