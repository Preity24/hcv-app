import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import get from "lodash/get";
import Link from "@material-ui/core/Link";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        getOpportunitiesData();
    }, []);

    const getOpportunitiesData = async () => {
        try {
            const response = await axios.get("/mockData_25.json");
            const opportunities = get(response, 'data', []);

            setData(opportunities['data']['opportunities'].find(el => el.id == id));

        } catch (e) {
            throw e;
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Box sx={{ bgcolor: 'background.paper', p: 6 }}>
                    <Typography
                        style={{ fontWeight: 600 }}
                        variant="h6"
                        align="left"
                        color="text.secondary"
                        component="p"
                        gutterBottom={true}
                    >
                        Opportunity Name: {data['opportunityName'] === "null" ? data['ProgramName'] : data['opportunityName']}
                    </Typography>
                    <Typography component="p" align="left" variant="body1" gutterBottom={true}>
                        {data['description']}
                    </Typography>
                    <Typography component="p" align="left" variant="body1">
                        <strong>Category:</strong> {data['category']} | <strong>Age Group:</strong> {data['ageRange']} | <strong>Price:</strong> {data['Cost']}
                    </Typography>
                </Box>

            </Grid>
            <Grid item xs={4}>
                <Box sx={{
                    width: 300,
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
                        variant="body1"
                        align="left"
                        color="text.secondary"
                        component="p"
                        gutterBottom={true}
                    >
                        Email:
                    </Typography>
                    <Typography
                        style={{ marginBottom: '20px'}}
                        variant="body1"
                        align="left"
                        color="text.secondary"
                        component="p"
                        gutterBottom={true}
                    >
                        {data['organizationEmail']}
                    </Typography>
                    <Typography
                        style={{ marginBottom: '20px'}}
                        variant="body1"
                        align="left"
                        color="text.secondary"
                        component="p"
                        gutterBottom={true}
                    >
                        Phone: (412) xxx-xxxx
                    </Typography>
                    <Typography
                        style={{ marginBottom: '20px'}}
                        variant="body1"
                        align="left"
                        color="text.secondary"
                        component="p"
                        gutterBottom={true}
                    >
                        Address: {data['orgCity']}
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
    )
};

export default Details;
