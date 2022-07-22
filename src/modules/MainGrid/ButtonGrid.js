import {React} from 'react';
import {Grid, Button} from '@mui/material';
import {toggleOpen, toggleClose, toggleHigh, toggleLow} from './MainGridSlice'
import { useSelector, useDispatch } from 'react-redux'

const ButtonGrid = () => {

  const showOpen = useSelector((state) => state.maingrid.open)
  const showHigh = useSelector((state) => state.maingrid.high)
  const showLow = useSelector((state) => state.maingrid.low)
  const showClose = useSelector((state) => state.maingrid.close)


  const dispatch = useDispatch()


  const setButtonColor = (success) => {
    if(success) return "success"
    return "error"
  }

    return(
        <Grid 
          container 
          direction="column" 
          spacing="7" 
          alignItems="center">
            <Grid item>
              <Button variant="contained" color={setButtonColor(showOpen)} onClick={() => dispatch(toggleOpen())}>Open</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color={setButtonColor(showHigh)} onClick={() => dispatch(toggleHigh())}>High</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color={setButtonColor(showLow)} onClick={() => dispatch(toggleLow())}>Low</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color={setButtonColor(showClose)} onClick={() => dispatch(toggleClose())}>Close</Button>
            </Grid>
        </Grid>
    )
}

export default ButtonGrid;