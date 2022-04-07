import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";

export default function BasicInfoForm() {
    return (
        <React.Fragment>
            <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                Basic Info
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="OpportunityName"
                        name="OpportunityName"
                        label="Opportunity Name"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="category"
                        name="category"
                        label="Category"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Describe the misson and the scope of the opportunity"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="website"
                        name="website"
                        label="Website"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="ageGroup"
                        name="ageGroup"
                        label="Targeted Age Group"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="paid"
                        name="paid"
                        label="Is it a paid opportunity?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="cost"
                        name="cost"
                        label="Cost of the Opportunity"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="stipend"
                        name="stipend"
                        label="Is there any stipend?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="financialAid"
                        name="financialAid"
                        label="Is there any financial aid?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={2}>
                            <Typography variant="h6" gutterBottom>
                                Upload Images:
                            </Typography>
                            <Button
                                variant="outlined"
                                size="medium"
                                style={{fontSize: '12px', backgroundColor: "#5e5996", color: 'white', opacity: 0.7}}
                                // onClick={handleOriginFilter}
                            >
                                Upload
                            </Button>
                    </Stack>

                </Grid>
            </Grid>
        </React.Fragment>
    );
}