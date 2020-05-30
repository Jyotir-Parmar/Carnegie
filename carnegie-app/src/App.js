import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { Banner } from './component/banner/banner';
import { TextView } from './component/textview/textview'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={11}>
          <Banner />
          <TextView />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
