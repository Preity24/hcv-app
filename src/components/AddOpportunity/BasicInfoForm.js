import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";
import {useState} from "react";

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

export default function BasicInfoForm() {

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        console.log(formValues);
    };

    return (
        <React.Fragment>
            <Typography variant="h5" align="left" style={{ fontWeight: 600 }} gutterBottom>
                Basic Info
            </Typography>
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
                            <Button onClick={handleSubmit}>
                                Submit
                            </Button>
                    </Stack>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}