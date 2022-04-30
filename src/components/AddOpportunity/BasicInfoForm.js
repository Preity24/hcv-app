import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {useState} from "react";
import Box from "@mui/material/Box";
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {searchCategories} from '../config';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AlertMessage from "../../utils/AlertMessage";

const defaultValues = {
    program_name: "",
    category: "",
    description: "",
    website: "",
    paid: false,
    cost: 0,
    financial_aid: false,
    age_range: "",
    org_city: "",
    org_name: "",
    org_state: "",
    org_zip: 0,
    org_address_name_line_1: "",
    org_address_name_line_2: "",
    program_email: "",
    phone_number: "",
    contact_full_name: "",
    contact_email: "",
    event_address_line1: "",
    event_address_line2: "",
    event_city: "",
    event_zip: 0
};


export default function BasicInfoForm() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [date, setDate] = useState(new Date());
    const [date_status, setDateStatus] = useState("Success");
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadAlert, setUploadAlert] = useState(false);
    const [resetAlert, setResetAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleImage = (e) => {
        if (e.target.files[0].size > 1024 ** 2) {
            setAlertContent("Image size cannot exceed 2MB");
            setUploadAlert(true);
        } else {
            setSelectedImage(e.target.files[0]);
            setAlertContent("Upload Successfully");
            setUploadAlert(true);
            setResetAlert(false);
        }

    };

    const handleResetImage = (e) => {
        setSelectedImage(null);
        setUploadAlert(false);
        setResetAlert(true);
        setAlertContent("Reset Successfully");
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formValues);

        let data = new FormData();
        data.append('category', formValues.category);
        data.append('description', formValues.description);
        data.append('qualification',"null");
        data.append('modality', 0);
        data.append('paid', formValues.paid);
        data.append('cost', formValues.cost);
        data.append('website', formValues.website);
        data.append('images', selectedImage);
        data.append('subprogram_name', formValues.program_name);
        data.append('program_name', formValues.program_name);
        data.append('age_range', formValues.age_range);
        data.append('grade_level', formValues.grade_level);
        data.append('org_name', formValues.org_name);
        data.append('org_city', formValues.org_city);
        data.append('date', date);
        data.append('org_state', formValues.org_state);
        data.append('org_zip', formValues.org_zip);
        data.append('org_address_name_line_1', formValues.org_address_name_line_1);
        data.append('org_address_name_line_2', formValues.org_address_name_line_2);
        data.append('program_email', formValues.program_email);
        data.append('phone_number', formValues.phone_number);
        data.append('contact_full_name', formValues.contact_full_name);
        data.append('contact_email', formValues.contact_email);
        data.append('event_address_line1', formValues.event_address_line1);
        data.append('event_address_line2', formValues.event_address_line2);
        data.append('event_city', formValues.event_city);
        data.append('event_zip', formValues.event_zip);
        await axios({
            method: "post",
            url: "https://hcv-demo.herokuapp.com/opportunities",
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                //handle success

                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        navigate("/home");
        // }
    };

    return (
        <StyledEngineProvider injectFirst>
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
                        id="program_name"
                        name="program_name"
                        label="Opportunity Name"
                        fullWidth
                        variant="standard"
                        autoComplete="new-password"
                        value={formValues.program_name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="categoryLabel">Category</InputLabel>
                        <Select
                            labelId="category"
                            name="category"
                            id="category"
                            value={formValues.category}
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
                        label="Describe the mission and the scope of the opportunity"
                        fullWidth
                        variant="standard"
                        autoComplete="new-password"
                        value={formValues.description}
                        onChange={handleInputChange}
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
                        autoComplete="new-password"
                        value={formValues.website}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            required
                            id="age_range"
                            name="age_range"
                            label="age_range"
                            fullWidth
                            variant="standard"
                            autoComplete="new-password"
                            value={formValues.age_range}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="paidLabel">Is it a paid opportunity?</InputLabel>
                        <Select
                            labelId="paid"
                            id="paid"
                            name="paid"
                            value={formValues.paid}
                            label="paid"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={true}><Typography align="left">True</Typography></MenuItem>
                            <MenuItem value={false}><Typography align="left">False</Typography></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="gradeLevelLabel">Grade Level</InputLabel>
                        <Select
                            labelId="grade_level"
                            name="grade_level"
                            id="grade_level"
                            value={String(formValues.grade_level)}
                            label="Grade Level"
                            onChange={handleInputChange}
                        >
                            {Object.values(searchCategories.age_categories).map((value) =>
                                <MenuItem
                                    value={value['grade_level']}
                                >
                                    <Typography align="left">{value['grade_level']} </Typography>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="cost"
                        name="cost"
                        label="Cost of the Opportunity"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={formValues.cost}
                        onChange={handleInputChange}
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
                                component="label"
                            >
                                Upload
                                <input
                                    accept="image/*"
                                    type="file"
                                    id="select-image"
                                    style={{ display: 'none' }}
                                    onChange={handleImage}
                                />
                            </Button>
                            <Button
                                variant="outlined"
                                size="medium"
                                style={{fontSize: '12px', backgroundColor: "#5e5996", color: 'white', opacity: 0.7}}
                                component="label"
                                onClick={handleResetImage}
                            >
                                Reset
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
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', mt: 3, align: 'left'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="date"
                                name="date"
                                label="Start Date:"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
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
                <Grid item xs={12}>
                    <TextField
                        required
                        id="event_address_line1"
                        name="event_address_line1"
                        label="Event Address Line 1:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.event_address_line1}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="event_address_line2"
                        name="event_address_line2"
                        label="Event Address Line 2:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.event_address_line2}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="event_city"
                        name="event_city"
                        label="Event City:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.event_city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="event_zip"
                        name="event_zip"
                        label="Event Zip:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.event_zip}
                        onChange={handleInputChange}
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
                        id="org_name"
                        name="org_name"
                        label="Organization Name:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.org_name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="org_address_name_line_1"
                        name="org_address_name_line_1"
                        label="Organization Address Line 1:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.org_address_name_line_1}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="org_address_name_line_2"
                        name="org_address_name_line_2"
                        label="Organization Address Line 2:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.org_address_name_line_2}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="orgCityLabel">Organization City:</InputLabel>
                        <Select
                            labelId="org_city"
                            name="org_city"
                            id="org_city"
                            value={formValues.org_city}
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
                        id="org_zip"
                        name="org_zip"
                        label="Organization Zip Code:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.org_zip}
                        onChange={handleInputChange}
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
                        id="contact_full_name"
                        name="contact_full_name"
                        label="Contact Name:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.contact_full_name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contact_title"
                        name="contact_title"
                        label="Title: "
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.contact_title}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone_number"
                        name="phone_number"
                        label="Contact Phone: "
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.phone_number}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contact_email"
                        name="contact_email"
                        label="Contact Email:"
                        fullWidth
                        variant="standard"
                        type="standard"
                        value={formValues.contact_email}
                        onChange={handleInputChange}
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
            {!uploadAlert ? null : <AlertMessage message={alertContent}/> }
            {!resetAlert ? null : <AlertMessage message={alertContent}/> }
        </React.Fragment>
        </StyledEngineProvider>
    );
}