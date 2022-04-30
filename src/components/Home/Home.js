import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/lab/Autocomplete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import {useState, useEffect} from "react";
import { IoMdAddCircle } from "react-icons/io";
import {searchCategories} from '../config';
import axios from 'axios';

/* reference to
  https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/album/Album.js
  https://www.youtube.com/watch?v=7MpvrG5c3A0
 */
const host = 'https://hcv-demo.herokuapp.com/opportunities/';
const theme = createTheme();

const useStyles = makeStyles(theme => ({
    formControl: {
        sx: {
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 1,
            minWidth: 900,
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
    },
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

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        getOpportunities();
    }, []);

    const handleFilters = (e, newValue) => {
        newValue = data.filter(item => {
            return (item.grade_level === null ? false : item.grade_level.includes(filterData_by_age == null ? "" : filterData_by_age)) &&
                (item.org_city === null ? false : item.org_city.includes(filterData_by_region == null ? "" : filterData_by_region)) &&
                (item.category === null ? false : item.category.includes(filterData_by_category));
        });
        setData(newValue);
    };

    function toBase64(arr) {
        return window.btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }


    const handleOriginFilter = (e, newValue) => {
        getOpportunities();
    };

    const getOpportunities = async () => {
        const response = await axios.get(host);
        setData(response.data);
        setFilterData(response.data);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <form className={classes.formContainer}>
                    <Container maxWidth="lg" sx={{ mt: 4 }}>
                        <Grid container spacing={2} columns={46}>
                            <Grid item xs={10}>
                                <Autocomplete
                                    id="ageGroup"
                                    inputValue={dropdown_ageRange}
                                    onInputChange={(_, v, reason) => {
                                        if (reason === 'clear') {
                                            setDropdown_ageRange("");
                                        } else {
                                            setDropdown_ageRange(v)
                                        }
                                    }
                                    }
                                    getOptionLabel={(option) => option['grade_level']}
                                    options={searchCategories.age_categories}
                                    noOptionsText={"No information"}
                                    onChange={(e, v) => {
                                        if (v !== null) {
                                            setFilterData_by_age(v.grade_level);
                                            return
                                        }
                                        setFilterData_by_age("");
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Grade Level"
                                                                        variant="outlined"/>}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Autocomplete
                                    id="region"
                                    inputValue={dropdown_region}
                                    onInputChange={(_, v, reason) => {

                                        if (reason === 'clear') {
                                            setDropdown_region("");
                                        } else {
                                            setDropdown_region(v)
                                        }
                                    }
                                    }
                                    getOptionLabel={(option) => option['orgCity']}
                                    options={searchCategories.region_categories}
                                    noOptionsText={"No information"}
                                    onChange={(e, v) => {
                                        if (v !== null) {
                                            setFilterData_by_region(v.orgCity);
                                            return
                                        }
                                        setFilterData_by_region("");
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Region" variant="outlined"/>}
                                />
                            </Grid>
                            <Grid item xs={16}>
                                <Autocomplete
                                    id="category"
                                    inputValue={dropdown_category}
                                    onInputChange={(_, v, reason) => {
                                        if (reason === 'clear') {
                                            setDropdown_category("");
                                        } else {
                                            setDropdown_category(v)
                                        }
                                    }
                                    }
                                    disablePortal
                                    getOptionLabel={(option) => option['category']}
                                    options={searchCategories.categories}
                                    noOptionsText={"No information"}
                                    onChange={(e, v) => {
                                        if (v !== null) {
                                            setFilterData_by_category(v.category);
                                            return
                                        }
                                        setFilterData_by_category("");
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Categories"
                                                                        variant="outlined"/>}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    style={{fontSize: '12px', backgroundColor: "#8DC540", color: 'white', opacity: 0.7}}
                                    onClick={handleFilters}
                                >
                                    Apply Filters
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    style={{fontSize: '12px', backgroundColor: "#5e5996", color: 'white', opacity: 0.7}}
                                    onClick={handleOriginFilter}
                                >
                                    Reset Filters
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    size="medium"
                                    href={`/addOpportunity`}
                                >
                                    <div style={{color: '#5e5996'}}>
                                        <IoMdAddCircle size={45} />
                                    </div>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </form>
                <Container sx={{py: 8}} maxWidth="lg">
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
                                        image={(card['images'] === null || card['images']['data'].length === 0 ) ? "https://s1.ax1x.com/2022/03/31/qRuuq0.jpg" : 'data:image/jpeg;base64,' + toBase64(new Uint8Array(card['images']['data']))}
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card['subprogram_name'] === null ? card['program_name'] : card['subprogram_name']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                            Grade Level: {card['grade_level']}
                                        </Typography>
                                        <Typography variant="h7" component="div" align="justify">
                                            Region: {card['org_city']}
                                        </Typography>
                                        <Typography variant="h8" component="div" align="left">
                                            Category: {card['category']}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={`/details/${card['opportunity_id']}`} color={"primary"}>View Details</Button>
                                        <Button size="small" href={`/editOpportunity/${card['opportunity_id']}`} color={"primary"}>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}



