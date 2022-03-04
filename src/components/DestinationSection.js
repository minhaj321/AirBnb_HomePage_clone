import React from 'react'
import './DestinationSection.css'
import {Grid} from '@mui/material'

const DestinationSection = () => {
  return (
    <div style={{width:'90%',margin:'auto',textAlign:'left',fontSize:15}}>
        <Grid container>
            <Grid item sm={3}>

            <div>
                <p style={{marginBottom:0}}>Pheonix</p>
                <p style={{marginTop:0,color:'gray'}}>Arizona</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>San Fransico</p>
                <p style={{marginTop:0,color:'gray'}}>California</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Keswick</p>
                <p style={{marginTop:0,color:'gray'}}>England</p>
            </div>
            </Grid>
            <Grid item sm={3}>
                
            <div>
                <p style={{marginBottom:0}}>Hot Springs</p>
                <p style={{marginTop:0,color:'gray'}}>Arkansas</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Barcelona</p>
                <p style={{marginTop:0,color:'gray'}}>Catalonia</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>London</p>
                <p style={{marginTop:0,color:'gray'}}>England</p>
            </div>
            </Grid>
            <Grid item sm={3}>
                
            <div>
                <p style={{marginBottom:0}}>Los Angeles</p>
                <p style={{marginTop:0,color:'gray'}}>California</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Prague</p>
                <p style={{marginTop:0,color:'gray'}}>Czechia</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Scarborough</p>
                <p style={{marginTop:0,color:'gray'}}>England</p>
            </div>
                </Grid>
            <Grid item sm={3}>
                
            <div>
                <p style={{marginBottom:0}}>San Diego</p>
                <p style={{marginTop:0,color:'gray'}}>California</p>
            </div>
            <div>
                <p style={{marginBottom:0}}>Washington</p>
                <p style={{marginTop:0,color:'gray'}}>District of Columbia</p>
            </div>
            <div>
                <p style={{textDecoration:'underline',fontWeight:'500'}}>Show more</p>
            </div>
                </Grid>
        </Grid>
        <br/><br/>
    </div>
  )
}

export default DestinationSection