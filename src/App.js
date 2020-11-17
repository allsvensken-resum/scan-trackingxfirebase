import './App.css';
import PendingTracking from './components/PendingTracking';
import Scanned from './components/Scanned';
import TrackingInput from './components/TrackingInput';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles({
  app__container: {
    padding: '0 4rem'
  }
});


function App() {

  const classes = useStyles();

  return (
    <div className="App" >
      <h1 className='app__header'>Scan Tracking</h1>
      <Grid className={classes.app__container} justify='center' container spacing={5} >
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <PendingTracking />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TrackingInput />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Scanned />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
