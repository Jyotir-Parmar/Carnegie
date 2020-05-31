import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';
import './banner.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const useStylesForBtn = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginRight: theme.spacing(1),
        },
    },
}));

export const Banner = (prop) => {
    const classes = useStyles();
    const btn = useStylesForBtn();
    return <div className='bannerHolder'>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div className="panelname">Carnegie Vanguard High School</div>
            </Toolbar>
        </AppBar>
        <div>
            <img style={{ width: '100%' }} src="https://www.houstonisd.org/cms/lib2/TX01001591/Centricity/ModuleInstance/233349/large/CVHS-1.png" alt='carnegie' />
        </div>
        <Grid container spacing={3} direction="coloum" justify="space-between" alignItems="flex-start">
            <Grid item>
                <div className="panelname">Carnegie Vanguard High School</div>
                <div className="collageaddr">Houston, Texas, USA</div>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item>
                        <div className="stats">Established&nbsp;</div>
                        <div className="stats">Active Student&nbsp;</div>
                        <div className="stats">Academic Staff&nbsp;</div>
                    </Grid>
                    <Grid item>
                        <div className="stats"> : 2002</div>
                        <div className="stats"> : 615</div>
                        <div className="stats"> : 55</div>
                    </Grid>
                </Grid>
                {/* <div>Established : 2002</div>
                <div>Active Student : 615</div>
                <div>Academic Staff : 55</div> */}
            </Grid>
        </Grid>
        <div className={btn.root}>
            <Button style={{ marginTop: "10px" }} size="small" variant="outlined" color="primary">Our Advisor</Button>
            <Button style={{ marginTop: "10px" }} className="btnmargin" size="small" variant="outlined" color="primary">Apply</Button>
            <Button style={{ marginTop: "10px" }} className="btnmargin" size="small" variant="outlined" color="primary">Inquire</Button>
            <Button style={{ marginTop: "10px" }} className="btnmargin" size="small" variant="outlined" color="primary">Chat</Button>
        </div>
    </div>
}