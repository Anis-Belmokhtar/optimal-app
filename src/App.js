import './App.css';
import Chart from './Chart.js';
import { Card } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Card variant="outlined" sx={{ maxWidth: 275 }}><Chart/></Card>
    </div>
  );
}

export default App;
