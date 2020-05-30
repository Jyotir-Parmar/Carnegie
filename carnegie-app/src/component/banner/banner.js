import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import bannerImage from '../../assets/images/banner.png';
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
                        <Typography variant="h6" className={classes.title}>
                            Carnegie Vanguard High School
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <img style={{ width: '100%' }} src={bannerImage} alt='carnegie' />
                </div>
                <Grid container spacing={3} direction="coloum" justify="space-between" alignItems="flex-start">
                    <Grid item>
                        <div><h6>Carnegie Vanguard High School</h6></div>
                        <div>Houston, Texas, USA</div>
                    </Grid>
                    <Grid item>
                        <div>Established: 2002</div>
                        <div>Active Student: 615</div>
                        <div>Academic Staff: 55</div>
                    </Grid>
                </Grid>
                <div className={btn.root}>
                    <Button size="small" variant="outlined" color="primary">Our Advisor</Button>
                    <Button size="small" variant="outlined" color="primary">Apply</Button>
                    <Button size="small" variant="outlined" color="primary">Inquire</Button>
                    <Button size="small" variant="outlined" color="primary">Chat</Button>
                </div>
    </div>
}