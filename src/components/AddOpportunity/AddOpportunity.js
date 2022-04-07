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

const theme = createTheme();

const AddOpportunity = () => {
    const DEFAULT_INPUT_WIDTH = 200;
    const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH);

    const [formValues, setFormValues] = useState(defaultValues);

    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(formValues);
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="left" gutterBottom={true} style={{ fontWeight: 600 }}>
                            Add New Opportunity
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Opportunity has been added.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        You can go back to opportunity page to find the opportunity you just added.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    )
};

export default AddOpportunity;