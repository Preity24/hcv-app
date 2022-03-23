import * as React from 'react';
import get from 'lodash/get';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import {makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getOpportunitiesListAPI } from '../../api/APIUtils';
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
// import Unsplash, { toJson } from 'unsplash-js';

/* reference to
  https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/album/Album.js
  https://www.youtube.com/watch?v=7MpvrG5c3A0
 */

const theme = createTheme();

const useStyles = makeStyles(theme => ({
    formControl: {
        sx: {
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 1,
            minWidth: 700,
        },
        width: 150,
    },
    select: {
        height: 50
    },
    label: {
        fontSize: 15,
        alignSelf: "center"
    },
    inputLabel: {
        fontSize: 2,
        alignSelf: "center"
    }
}));

export default function Home() {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterData_by_age, setFilterData_by_age] = useState(false);
    const [filterData_by_region, setFilterData_by_region] = useState(false);
    const [filterData_by_category, setFilterData_by_category] = useState(false);

    // const unsplash = new Unsplash({
    //     applicationId: "{YMHeEDGCR9Tf1zyh_jKmcGcAnntJtT5LGpnNT5HGd0I}",
    //     secret: "{0rW-2a-W0inOUoDkJHrdEep0rxft8PTwrlBH98Axym0}"
    // });

    const [picture, setPic] = useState("")


    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        getOpportunitiesData();
      }, []);

    const handleCategory = (e, newValue) => {
        setData(data);
    };



    const handleAgeFilter = (e, newValue) => {
        if (filterData_by_region) {
            setFilterData(filterData.filter(function(item){
                return item.ageRange.includes(newValue.ageRange);
            }));
        } else if (filterData_by_category) {
            setFilterData(filterData.filter(function(item){
                return item.ageRange.includes(newValue.ageRange);
            }));
        } else {
            setFilterData(data.filter(function(item){
                return item.ageRange.includes(newValue.ageRange);
            }));
        }

        setFilterData_by_age(true);
    };

    const handleRegionFilter = (e, newValue) => {
        if (filterData_by_age) {
            setFilterData(filterData.filter(function(item){
                return item.orgCity.includes(newValue.orgCity);
            }));
        } else if (filterData_by_category) {
            setFilterData(filterData.filter(function(item){
                return item.orgCity.includes(newValue.orgCity);
            }));
        } else {
            setFilterData(data.filter(function(item){
                return item.orgCity.includes(newValue.orgCity);
            }));
        }
        setFilterData_by_region(true);
    };

    const handleCategoryFilter = (e, newValue) => {
        if (filterData_by_age) {
            setFilterData(filterData.filter(function(item){
                return item.category.includes(newValue.category);
            }));
        } else if (filterData_by_region) {
            setFilterData(filterData.filter(function(item){
                return item.category.includes(newValue.category);
            }));
        } else {
            setFilterData(data.filter(function(item){
                return item.category.includes(newValue.category);
            }));
        }
        setFilterData_by_category(true);
    };

    const handleOriginFilter = (e, newValue) => {
        setFilterData([]);
        setFilterData_by_age(false);
        setFilterData_by_region(false);
        setFilterData_by_category(false);
    };

    const getOpportunitiesData = async () => {
        try {
            const response = await getOpportunitiesListAPI();
            const opportunities = get(response, 'data', []);
            setData(opportunities['data']['opportunities']);
          }
          catch (e) {
            throw e;
          }
      };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <form className={classes.formContainer}>
                    <Container maxWidth="md">
                        <Grid container spacing={2} columns={32}>
                            <Grid item xs={8}>
                                <Autocomplete
                                    getOptionLabel={(option) => option['ageRange']}
                                    // getOptionLabel={(data) => `${data['ageRange']}`}
                                    options={age_categories}
                                    noOptionsText={"No information"}
                                    onChange={handleAgeFilter}
                                    renderInput={(params) => <TextField {...params} label="Age Group" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Autocomplete
                                    // getOptionLabel={(data) => `${data['orgCity']}`}
                                    getOptionLabel={(option) => option['orgCity']}
                                    options={region_categories}
                                    noOptionsText={"No information"}
                                    onChange={handleRegionFilter}
                                    renderInput={(params) => <TextField {...params} label="Region" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    // getOptionLabel={(data) => `${data['orgCity']}`}
                                    disablePortal
                                    getOptionLabel={(option) => option['category']}
                                    options={categories}
                                    noOptionsText={"No information"}
                                    onChange={handleCategoryFilter}
                                    renderInput={(params) => <TextField {...params} label="Categories" variant="outlined" />}
                                />

                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    style={{ fontSize: '12px' }}
                                    onClick={handleOriginFilter}
                                >
                                    Reset Filters
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>


                    {/*<Button type="submit" className={classes.searchBtn} variant="contained" color="primary" disabled={!employeeName} onKeyPress={handleKeyPress}>Search</Button> */}
                </form>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {filterData.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            // pt: '56.25%',
                                            pt: '10%'
                                        }}
                                        image="https://s1.ax1x.com/2022/03/24/q3x6Hg.jpg"
                                        // image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card['ProgramName'] === null ? "Not available now" : card['ProgramName']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                            Age Group: {card['ageRange']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                             Region: {card['orgCity']}
                                        </Typography>
                                        <Typography variant="h8" component="div" align="left" >
                                             Category: {card['category']}
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    {/*  <Button size="small">View</Button>*/}
                                    {/*  <Button size="small">Edit</Button>*/}
                                    {/*</CardActions>*/}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>



        </ThemeProvider>
    );
}


const age_categories = [
    {
        ageRange: "9-10",
    },
    {
        ageRange: "10-14",
    },
    {
        ageRange: "14-19",
    }
];

const region_categories = [
    {
        orgCity: "Pittsburgh",
    },
    {
        orgCity: "Redmond",
    },
    {
        orgCity: "Ithaca",
    }
];

const categories = [
    {
        category: "Enrichment Exposure Exploration",
    },
    {
        category: "Internships",
    },
    {
        category: "Apprenticeships",
    },
    {
        category: "Summer Camps",
    },
    {
        category: "Sports Teams",
    },
    {
        category: "Volunteer Opportunities",
    },
    {
        category: "Local Clubs",
    },
    {
        category: "Honor Societies",
    },
    {
        category: "Academic Societies",
    },
    {
        category: "Scholarships",
    },
    {
        category: "Awards",
    },
    {
        category: "Fellowships",
    },
    {
        category: "Skills Training",
    },
    {
        category: "Local Events",
    },
    {
        category: "Study Abroad",
    },
    {
        category: "Dual Enrollment",
    },
    {
        category: "College Tours",
    }
];

