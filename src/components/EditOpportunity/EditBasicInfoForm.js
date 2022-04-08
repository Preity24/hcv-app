import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";
import {useState} from "react";
import Box from "@mui/material/Box";
import axios from 'axios';
import { useNavigate, useRoute } from 'react-router-dom';
import {useEffect} from "react";

const id = window.location.href.split('/')[4];


export default function EditBasicInfoForm() {

    useEffect(() => {
        getOpportunitiyByID();
    }, []);

    const [formValues, setFormValues] = useState({});

    const getOpportunitiyByID = async () => {
        const response = await axios.get('http://localhost:5001/opportunities/' + id);
        setFormValues(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.patch('http://localhost:5001/opportunities/' + id,{
            name: formValues.name,
            category: formValues.category,
            description: formValues.description,
            qualifications: "null",
            modality: "null",
            paid: formValues.paid,
            cost: formValues.cost,
            stipend: formValues.stipend,
            financial_aid: formValues.financial_aid,
            website: formValues.website,
            image_path: "null",
            reviews: "null",
            start_date: null,
            end_date: null,
            application_deadline: null,
            ageRange: formValues.ageRange,
            orgCity: formValues.orgCity
        });
        navigate("/home");
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', ml: 1, mt: 3, align: 'left'}}>
                <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                    Basic Info
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Opportunity Name"
                        fullWidth
                        variant="standard"
                        value={formValues.name}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
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
                        value={formValues.category}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
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
                        value={formValues.description}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
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
                        value={formValues.website}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        // required
                        id="ageGroup"
                        name="ageGroup"
                        label="Targeted Age Group"
                        fullWidth
                        variant="standard"
                        // value={formValues.name}
                        // onChange={handleInputChange}
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
                        value={formValues.paid}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="cost"
                        name="cost"
                        label="Cost of the Opportunity"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={formValues.cost}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
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
                        type="number"
                        value={formValues.stipend}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
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
                        value={formValues.financial_aid}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1" gutterBottom>
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
            <Box sx={{ display: 'flex', ml: 1, mt: 3, align: 'left'}}>
                <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                    Event Info
                </Typography>
            </Box>
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
            <Box sx={{ display: 'flex', ml: 1, mt: 3, align: 'left'}}>
                <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                    Organization Info
                </Typography>
            </Box>
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
            <Box sx={{ display: 'flex', ml: 1, mt: 3, align: 'left'}}>
                <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                    Contact Info
                </Typography>
            </Box>
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

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' , m: 3}}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                >
                    Submit
                </Button>
            </Box>
        </React.Fragment>
    );
}