import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Location = (props) => {
    return <Grid className="textviewholder" container direction="column" justify="flex-start" alignItems="flex-start">
        <Grid item>
            <Typography variant="h6">
                Location
            </Typography>
        </Grid>
        <Grid item style={{width: "100%"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13855.266766560668!2d-95.3851833!3d29.7540179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x480feeca1ceab1bd!2sCarnegie%20Vanguard%20High%20School!5e0!3m2!1sen!2sin!4v1590860730779!5m2!1sen!2sin"
                width="100%" height="300rem" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Grid>
    </Grid>
}