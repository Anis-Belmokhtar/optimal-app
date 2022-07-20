import './App.css';
import {Grid, Button} from '@mui/material';
import ChartCard from './components/ChartCard/ChartCard';




function App() {
  return (
    <div className="App">
      <Grid 
      container 
      direction="row" 
      justifyContent="center" 
      spacing="7"> 
        <Grid item>
          <ChartCard/>
        </Grid>
        <Grid item>
          <Grid 
          container 
          direction="column" 
          spacing="7" 
          alignItems="center">
            <Grid item>
              <Button variant="outlined">Outlined</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Outlined</Button>
            </Grid>
          </Grid>
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default App;
