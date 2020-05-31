import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './textview.css';
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp';

export const TextView = (props) => {
    return <Grid className="textviewholder" container direction="column"  justify="flex-start" alignItems="stretch">
        <Grid item>
            <div className="panelname" style={{marginBottom: "15px"}}>
                {props.data.sectionName}
                <AspectRatioSharpIcon style={{float: "right"}} />
            </div>
        </Grid>
        <Grid item>
            {props.data.content}
        </Grid>
    </Grid>
}