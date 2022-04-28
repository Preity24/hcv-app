import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {useState} from "react";
import Box from "@mui/material/Box";
import axios from 'axios';
import { useNavigate, useRoute } from 'react-router-dom';
import {useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import {searchCategories} from "../config";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import AlertMessage from "../../utils/AlertMessage";

const id = window.location.href.split('/')[4];


export default function EditBasicInfoForm() {

    useEffect(() => {
        getOpportunitiyByID();
    }, []);

    const [formValues, setFormValues] = useState({});
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    const [date_status, setDateStatus] = useState("Success");

    const getOpportunitiyByID = async () => {
        const response = await axios.get('http://localhost:5001/opportunities/' + id);
        setFormValues(response.data);
        setStartDate(response.data.start_date);
        setEndDate(response.data.end_date);
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
        if (new Date(start_date) > new Date(end_date)) {
            setDateStatus({ msg: "Start Date should not exceed End Date!", key: Math.random()});
        } else {
            event.preventDefault();
            await axios.patch('http://localhost:5001/opportunities/' + id, {
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
                start_date: start_date,
                end_date: end_date,
                application_deadline: null,
                ageRange: formValues.ageRange,
                orgCity: formValues.orgCity
            });
            navigate("/home");
        }
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
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="categoryLabel">Category</InputLabel>
                        <Select
                            labelId="category"
                            name="category"
                            id="category"
                            value={String(formValues.category)}
                            label="category"
                            onChange={handleInputChange}

                        >
                            {Object.values(searchCategories.categories).map((value) =>
                                <MenuItem
                                    value={value['category']}
                                >
                                    <Typography align="left">{value['category']} </Typography>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
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
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="ageRangeLabel">Targeted Age Group</InputLabel>
                        <Select
                            labelId="ageRange"
                            name="ageRange"
                            id="ageRange"
                            value={String(formValues.ageRange)}
                            label="Targeted Age Group"
                            onChange={handleInputChange}
                        >
                            {Object.values(searchCategories.age_categories).map((value) =>
                                <MenuItem
                                    value={value['ageRange']}
                                >
                                    <Typography align="left">{value['ageRange']} </Typography>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="paidLabel">Is it a paid opportunity?</InputLabel>
                        <Select
                            labelId="paid"
                            id="paid"
                            name="paid"
                            value={formValues.paid ? "true" : "false"}
                            label="paid"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={true}><Typography align="left">True</Typography></MenuItem>
                            <MenuItem value={false}><Typography align="left">False</Typography></MenuItem>
                        </Select>
                    </FormControl>
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
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="financialAidLabel">Is there any financial aid?</InputLabel>
                        <Select
                            labelId="financialAid"
                            id="financialAid"
                            name="financialAid"
                            value={formValues.financial_aid ? "true" : "false"}
                            label="financialAid"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={true}><Typography align="left">True</Typography></MenuItem>
                            <MenuItem value={false}><Typography align="left">False</Typography></MenuItem>
                        </Select>
                    </FormControl>
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
                    <Box sx={{ display: 'flex', mt: 3, align: 'left'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="start_date"
                                name="start_date"
                                label="Start Date:"
                                value={start_date}
                                onChange={(newValue) => {
                                    setStartDate(newValue);
                                }}
                                PopoverProps={{
                                    anchorOrigin: { horizontal: "center", vertical: "bottom" },
                                    transformOrigin: { horizontal: "center", vertical: "bottom" }
                                }}
                                InputAdornmentProps={{ position: 'start' }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', mt: 3, align: 'left'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="end_date"
                                name="end_date"
                                label="End Date:"
                                value={end_date}
                                onChange={(newValue) => {
                                    setEndDate(newValue);
                                }}
                                PopoverProps={{
                                    placement: 'left',
                                    anchorOrigin: { horizontal: "center", vertical: "bottom" },
                                    transformOrigin: { horizontal: "center", vertical: "bottom" }
                                }}
                                InputAdornmentProps={{ position: 'start' }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
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
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="orgCityLabel">Organization City:</InputLabel>
                        <Select
                            labelId="orgCity"
                            name="orgCity"
                            id="orgCity"
                            value={String(formValues.orgCity)}
                            label="Organization City:"
                            onChange={handleInputChange}
                        >
                            {Object.values(searchCategories.region_categories).map((value) =>
                                <MenuItem
                                    value={value['orgCity']}
                                >
                                    <Typography align="left">{value['orgCity']} </Typography>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
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
                        autoComplete="new-password"
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
                        autoComplete="new-password"
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
                        autoComplete="new-password"
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
                        autoComplete="new-password"
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
            {date_status === 'Success' ? null : <AlertMessage key={date_status.key} message={date_status.msg}/> }
        </React.Fragment>
    );
}