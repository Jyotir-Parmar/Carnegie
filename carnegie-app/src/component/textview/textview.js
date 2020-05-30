import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
export const TextView = (props) => {
    return <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item>
            <Typography variant="h6">
                Carnegie Vanguard High School
            </Typography>
        </Grid>
    </Grid>
}