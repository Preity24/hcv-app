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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import {makeStyles} from '@material-ui/core/styles';
import {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {getOpportunitiesListAPI} from '../../api/APIUtils';
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
    const [filterData_by_age, setFilterData_by_age] = useState("");
    const [filterData_by_region, setFilterData_by_region] = useState("");
    const [filterData_by_category, setFilterData_by_category] = useState("");
    const [dropdown_ageRange, setDropdown_ageRange] = useState("");
    const [dropdown_region, setDropdown_region] = useState("");
    const [dropdown_category, setDropdown_category] = useState("");

    // const unsplash = new Unsplash({
    //     applicationId: "{YMHeEDGCR9Tf1zyh_jKmcGcAnntJtT5LGpnNT5HGd0I}",
    //     secret: "{0rW-2a-W0inOUoDkJHrdEep0rxft8PTwrlBH98Axym0}"
    // });

    const [picture, setPic] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        getOpportunitiesData();
    }, []);

    function filterBy(list, cond) {
        return list.filter(e =>
            Object.keys(cond).every(key =>
                e[key].includes(cond[key])
            )
        );
    }


    const handleCategory = (e, newValue) => {

        newValue = data.filter(item => {
            return item.ageRange.includes(filterData_by_age) &&
                item.orgCity.includes(filterData_by_region) &&
                item.category.includes(filterData_by_category);
        });

        setData(newValue);
    };

    const handleAgeFilter = (e, newValue) => {
        setFilterData_by_age(newValue.ageRange);
    };

    const handleRegionFilter = (e, newValue) => {
        setFilterData_by_region(newValue.orgCity);
    };

    const handleCategoryFilter = (e, newValue) => {
        setFilterData_by_category(newValue.category);
    };

    const handleOriginFilter = (e, newValue) => {
        getOpportunitiesData();
        setFilterData_by_age("");
        setFilterData_by_region("");
        setFilterData_by_category("");
        clearValue();
    };

    const getOpportunitiesData = async () => {
        try {
            const response = await axios.get("/mockData_80.json");
            const opportunities = get(response, 'data', []);
            setData(opportunities['data']['opportunities']);
            setFilterData(opportunities['data']['opportunities'])
        } catch (e) {
            throw e;
        }
    };

    const clearValue = () => {
        setDropdown_ageRange("");
        setDropdown_region("");
        setDropdown_category("");
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <form className={classes.formContainer}>
                    <Container maxWidth="md">
                        <Grid container spacing={2} columns={40}>
                            <Grid item xs={8}>
                                <Autocomplete
                                    id="ageGroup"
                                    inputValue={dropdown_ageRange}
                                    onInputChange={(_, v) => setDropdown_ageRange(v)}
                                    getOptionLabel={(option) => option['ageRange']}
                                    options={age_categories}
                                    noOptionsText={"No information"}
                                    onChange={handleAgeFilter}
                                    renderInput={(params) => <TextField {...params} label="Age Group"
                                                                        variant="outlined"/>}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Autocomplete
                                    id="region"
                                    inputValue={dropdown_region}
                                    onInputChange={(_, v) => setDropdown_region(v)}
                                    getOptionLabel={(option) => option['orgCity']}
                                    options={region_categories}
                                    noOptionsText={"No information"}
                                    onChange={handleRegionFilter}
                                    renderInput={(params) => <TextField {...params} label="Region" variant="outlined"/>}
                                />
                            </Grid>
                            <Grid item xs={16}>
                                <Autocomplete
                                    id="category"
                                    inputValue={dropdown_category}
                                    onInputChange={(_, v) => setDropdown_category(v)}
                                    disablePortal
                                    getOptionLabel={(option) => option['category']}
                                    options={categories}
                                    noOptionsText={"No information"}
                                    onChange={handleCategoryFilter}
                                    renderInput={(params) => <TextField {...params} label="Categories"
                                                                        variant="outlined"/>}
                                />

                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    style={{fontSize: '12px', backgroundColor: "#8DC540", color: 'white', opacity: 0.7}}
                                    onClick={handleCategory}
                                >
                                    Apply Filters
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    style={{fontSize: '12px', backgroundColor: "#5e5996", color: 'white', opacity: 0.7}}
                                    onClick={handleOriginFilter}
                                >
                                    Reset Filters
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>


                    {/*<Button type="submit" className={classes.searchBtn} variant="contained" color="primary" disabled={!employeeName} onKeyPress={handleKeyPress}>Search</Button> */}
                </form>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {data.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            // pt: '56.25%',
                                            pt: '10%'
                                        }}
                                        image={!card.hasOwnProperty('image') ? "https://s1.ax1x.com/2022/03/24/q3x6Hg.jpg" : card['image']}
                                        // image="https://s1.ax1x.com/2022/03/24/q3x6Hg.jpg"
                                        // image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card['opportunityName'] === "null" ? card['ProgramName'] : card['opportunityName']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                            Age Group: {card['ageRange']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                            Region: {card['orgCity']}
                                        </Typography>
                                        <Typography variant="h8" component="div" align="left">
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

