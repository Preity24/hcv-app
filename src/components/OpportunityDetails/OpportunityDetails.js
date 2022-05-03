import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const host = 'https://hcv-demo.herokuapp.com/opportunities/';
// const host = 'http://localhost:5001/opportunities/';

const OpportunityDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        getOpportunities()
    }, []);

    const getOpportunities = async () => {
        const response = await axios.get(host + id);
        console.log(response.data);
        setData(response.data);
    };

    return (
        <Container sx={{py: 2}} maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={8} xl={10}>
                    <Box sx={{ bgcolor: 'background.paper', pt: 3, pb: 8 }}>
                        <Typography component="p" align="left" variant="h5" sx={{mb: 4}}>
                            <strong>{data['subprogram_name'] === null ? data['program_name'] : data['subprogram_name']}</strong>
                        </Typography>
                        <Typography component="p" align="left" variant="body1" gutterBottom={true}>
                            {data['description']}
                        </Typography>
                        <Typography component="p" align="left" variant="body1">
                            <br/><strong>Category:</strong> {data['category']} | <strong>Age Group:</strong> {data['age_range']} | <strong>Grade Level:</strong> {data['grade_level']} <br/><br/> <strong>Price:</strong> {data['cost'] === "" ? 0 : data['cost']} | <strong>Modality:</strong> {data['modality'] === "0" ? "In Person" : (data['modality'] === "1" ? "Virtual" : "Hybrid")}
                        </Typography>
                    </Box>
                    <Typography component="p" align="left" variant="h6" sx={{mb: 4}}>
                        <strong>Event Info</strong>
                    </Typography>
                    <Box sx={{
                        // p: 3,
                        width: 1200,
                        height: 275,
                        // bgcolor: '#F2F2F2',
                    }}>
                        <Typography component="p" align="left" variant="body1" sx={{mb: 3}}>
                            <strong>Event Address:</strong> {(data['event_address_line1'] === null || data['event_address_line1'] === 'null' || data['event_address_line1'] === '') ? "Not Applicable" : data['event_address_line1'] + ", " + data['event_address_line2']
                         + ", " + data['event_city'] + ", "  +  data['event_zip']}
                        </Typography>
                        <Typography component="p" align="left" variant="body1">
                            <strong>Start Date:</strong> {data['date'] === null ? "Not Applicable" : data['date']}
                        </Typography>
                    </Box>

                </Grid>

                <Grid item xs={8} xl={2}>
                    <Box sx={{
                        width: 350,
                        height: 600,
                        bgcolor: '#F2F2F2',
                        p: 3
                    }}>

                        <Typography
                            style={{ fontWeight: 600, marginBottom: '16px'}}
                            variant="h6"
                            align="left"
                            color="text.secondary"
                            component="p"
                            gutterBottom={true}
                        >
                            Contact:
                        </Typography>
                        <Typography
                            component="p"
                            align="left"
                            variant="body1"
                            gutterBottom={true}
                        >
                            <strong>{(data['contact_title'] === null || data['contact_title'] === 'null' || data['contact_title'] === '') ? data['contact_full_name'] : data['contact_full_name'] + ", " + data['contact_title']}</strong>
                        </Typography>
                        <Typography
                            variant="body1"
                            align="left"
                            color="text.secondary"
                            component="p"
                            gutterBottom={true}
                        >
                            {(data['contact_email'] === null || data['contact_email'] === '') ? "" : "Email: " + data['contact_email']}
                        </Typography>
                        <Typography
                            style={{ marginBottom: '20px'}}
                            variant="body1"
                            align="left"
                            color="text.secondary"
                            component="p"
                            gutterBottom={true}
                        >
                             {(data['phone_number'] === null || data['phone_number'] === '') ? "" : "Phone: " + data['phone_number']}
                        </Typography>
                        <Typography
                            component="p"
                            align="left"
                            variant="body1"
                            gutterBottom={true}
                        >
                            <strong>{(data['org_name'] === null || data['org_name'] === '') ? "" : data['org_name']}</strong>
                        </Typography>
                        <Typography
                            style={{ marginBottom: '20px'}}
                            variant="body1"
                            align="left"
                            color="text.secondary"
                            component="p"
                            gutterBottom={true}
                        >
                            Address: {(data['org_address_name_line_1'] === null || data['org_address_name_line_1'] === 'null' || data['org_address_name_line_1'] === '') ? "Not Applicable" : data['org_address_name_line_1'] + ", " + (data['org_address_name_line_2'] === null || data['org_address_name_line_2'] === '' ? "" : data['org_address_name_line_2'] + ", ") +
                            data['org_city'] +  ", " + data['org_zip']}
                        </Typography>
                        <Typography
                            style={{ marginBottom: '20px'}}
                            variant="body1"
                            align="left"
                            color="text.secondary"
                            component="p"
                            gutterBottom={true}
                        >
                            Website: <Link href={data['website']}>{data['website']}</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default OpportunityDetails;
