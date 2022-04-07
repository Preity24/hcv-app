import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";


export default function OrgInfoForm() {
    return (
        <React.Fragment>
            <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                Organization Info
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="organizationName"
                        name="organizationName"
                        label="Organization Name:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="organizationEmail"
                        name="organizationEmail"
                        label="Organization Email:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orgAddressLine1"
                        name="orgAddressLine1"
                        label="Organization Address Line 1:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orgAddressLine2"
                        name="orgAddressLine2"
                        label="Organization Address Line 2:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orgCity"
                        name="orgCity"
                        label="Organization City:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orgZip"
                        name="orgZip"
                        label="Organization Zip Code:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                Contact Info
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="contactName"
                    name="contactName"
                    label="Contact Name:"
                    fullWidth
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contactTitle"
                        name="contactTitle"
                        label="Title: "
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contactPhone"
                        name="contactPhone"
                        label="Contact Phone:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contactEmail"
                        name="contactEmail"
                        label="Contact Email:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}