import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import get from "lodash/get";
import Link from "@material-ui/core/Link";
import OpportunityDetails from "../OpportunityDetails/OpportunityDetails";
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BasicInfoForm from './BasicInfoForm';
import EventInfoForm from './EventInfoForm';
import OrgInfoForm from './OrgInfoForm';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const steps = ['Basic Info', 'Event Info', 'Org & Contact Info'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicInfoForm />;
        case 1:
            return <EventInfoForm />;
        case 2:
            return <OrgInfoForm />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

const defaultValues = {
    name: "",
    category: "",
    description: "",
    website: "",
    age_group: "",
    paid: false,
    cost: 0,
    stipend: 0,
    financial_aid: false,
    image_path: ""
};

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