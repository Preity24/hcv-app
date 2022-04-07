import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";


export default function EventInfoForm() {
    return (
        <React.Fragment>
            <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                Event Info
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="eventName"
                        name="eventName"
                        label="Event Name"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="startDate"
                        name="startDate"
                        label="Start Date:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="endDate"
                        name="endDate"
                        label="End Date:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="application_ddl"
                        name="application_ddl"
                        label="Application Deadline:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="addressLine1"
                        name="addressLine1"
                        label="Event Address Line 1:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="addressLine2"
                        name="addressLine2"
                        label="Event Address Line 2:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="eventCity"
                        name="eventCity"
                        label="Event City:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="eventZip"
                        name="eventZip"
                        label="Event Zip:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}