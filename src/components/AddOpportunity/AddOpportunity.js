import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import BasicInfoForm from './BasicInfoForm';
import Paper from "@mui/material/Paper";

const theme = createTheme();

const AddOpportunity = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="left" gutterBottom={true} style={{ fontWeight: 600 }}>
                            Add New Opportunity
                        </Typography>

                        <React.Fragment>
                                <React.Fragment>
                                    <BasicInfoForm/>
                                </React.Fragment>
                        </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    )
};

export default AddOpportunity;