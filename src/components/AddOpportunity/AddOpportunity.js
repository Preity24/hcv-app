import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import get from "lodash/get";
import Link from "@material-ui/core/Link";
import OpportunityDetails from "../OpportunityDetails/OpportunityDetails";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

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
    const DEFAULT_INPUT_WIDTH = 200;
    const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH);

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
        // console.log(formValues);
    };
    return (
        <Paper>
            <Box sx={{ bgcolor: 'background.paper', pl: 8, pb: 2 }}>
                <Typography
                    style={{ fontWeight: 600 }}
                    variant="h4"
                    align="left"
                    color="text.secondary"
                    component="p"
                    gutterBottom={true}
                >
                    Add New Opportunity
                </Typography>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pl: 8, pb: 2 }}>
                <Typography
                    style={{ fontWeight: 600 }}
                    variant="h5"
                    align="left"
                    color="text.secondary"
                    component="p"
                    gutterBottom={true}
                >
                    Basic Info
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1} alignItems="left" justify="center" direction="row">
                    <Grid item xs={8}>
                        <Box sx={{ bgcolor: 'background.paper', pl: 8, pb: 4 }}>
                            <Typography
                                style={{ fontWeight: 600 }}
                                variant="subtitle1"
                                align="left"
                                color="text.secondary"
                                component="p"
                                gutterBottom={true}
                            >
                                Opportunity Name:
                            </Typography>
                            <TextField
                                // onChange={onTextChange}
                                // value={textValue}
                                required
                                multiline
                                label="Opportunity name"
                                variant="outlined"
                                // defaultValue="Enter the opportunity name"
                                type="text"
                                fullWidth
                                InputProps={{
                                    style: { width: `${inputWidth}px` },
                                }}
                            >
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ bgcolor: 'background.paper', pb: 4 }}>
                            <Typography
                                style={{ fontWeight: 600 }}
                                variant="subtitle1"
                                align="left"
                                color="text.secondary"
                                component="p"
                                gutterBottom={true}
                            >
                                Brief Description:
                            </Typography>
                            <TextField
                                // onChange={onTextChange}
                                // value={textValue}
                                required
                                multiline
                                label="Opportunity name"
                                variant="outlined"
                                // defaultValue="Enter the opportunity name"
                                type="text"
                                fullWidth
                                InputProps={{
                                    style: { width: `${inputWidth}px` },
                                }}
                            >
                            </TextField>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default AddOpportunity;