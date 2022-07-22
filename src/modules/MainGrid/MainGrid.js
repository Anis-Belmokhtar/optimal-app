import React from 'react';
import {Grid} from '@mui/material';
import ChartCard from './ChartCard/ChartCard'
import ButtonGrid from './ButtonGrid'

const MainGrid = () => {
    return (
        <Grid 
        container 
        direction="row" 
        justifyContent="center" 
        alignItems="center"
        spacing="7"> 
          <Grid item>
            <ChartCard/>
          </Grid>
          <Grid item>
            <ButtonGrid/>
          </Grid>
        </Grid>
    )
}

export default MainGrid