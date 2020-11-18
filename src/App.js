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
  },

  app__header: {
    paddingLeft: '4rem',
    paddingBottom: '0.8rem',
    marginTop: 20
  },

  '@media screen and (max-width: 800px)': {
    app__container: {
      padding: '0 2rem'
    },

    app__header: {
      paddingLeft: '2rem'
    }
  }
});


function App() {

  const classes = useStyles();

  return (
    <div className="App" >
      <h1 className={classes.app__header}>Scan Tracking</h1>
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
