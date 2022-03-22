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

/* reference to
  https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/album/Album.js
  https://www.youtube.com/watch?v=7MpvrG5c3A0
 */

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Homewood Children's Village
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const useStyles = makeStyles(theme => ({
    formControl: {
        sx: {
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 1,
            minWidth: 300,
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


    const handleChange = e => setValue(e.target.value);
    useEffect(() => {
        getOpportunitiesData();
      }, []);

    const handleCategory = (e, newValue) => {
        setData(newValue);
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
        <form className={classes.formContainer}>
            <Stack sx={{width: 300, margin: "auto"}}>
                <Autocomplete
                    id="Category"
                    getOptionLabel={(data) => `${data['ageRange']}`}
                    options={data}
                    noOptionsText={"No information"}
                    // onChange={handleCategory}
                    renderInput={(params) => <TextField {...params} label="Age Group" variant="outlined" />}
                />

                <Autocomplete
                    id="Category"
                    getOptionLabel={(data) => `${data['orgCity']}`}
                    options={data}
                    noOptionsText={"No information"}
                    // onChange={handleCategory}
                    renderInput={(params) => <TextField {...params} label="Region" variant="outlined" />}
                />
            </Stack>


             {/*<Button type="submit" className={classes.searchBtn} variant="contained" color="primary" disabled={!employeeName} onKeyPress={handleKeyPress}>Search</Button> */}
      </form>
        // <ThemeProvider theme={theme}>
        //     <CssBaseline />
        //     <main>
        //         {/* Hero unit */}
        //         <Box
        //             sx={{
        //                 bgcolor: 'background.paper',
        //                 pt: 2,
        //                 pb: 2,
        //                 height: 10
        //             }}
        //         >
        //             <Container maxWidth="sm">
        //                 <Stack
        //                     sx={{
        //                         pt: 2
        //                     }}
        //                     direction="row"
        //                     spacing={4}
        //                     justifyContent="flex-start'"
        //                 >
        //                     <p className={classes.label}>Age Group</p>
        //                     <FormControl className={classes.formControl}>
        //                         <InputLabel
        //                             variant={'filled'}
        //                             sx={{
        //                                 width:150,
        //                                 fontSize: 12
        //                             }}
        //                         >Middle School</InputLabel>
        //                         <Select className={classes.select} onChange={handleChange}>
        //                             <MenuItem value={10}>Ten</MenuItem>
        //                             <MenuItem value={20}>Twenty</MenuItem>
        //                             <MenuItem value={30}>Thirty</MenuItem>
        //                             <MenuItem value={40}>Forty</MenuItem>
        //                         </Select>
        //                     </FormControl>
        //                     <p className={classes.label}>Region</p>
        //                     <FormControl className={classes.formControl}>
        //                         <InputLabel
        //                             variant={'filled'}
        //                             sx={{
        //                                 width:150,
        //                                 fontSize: 12
        //                             }}>Input postal code</InputLabel>
        //                         <Select className={classes.select}>
        //                             <MenuItem value={10}>Ten</MenuItem>
        //                             <MenuItem value={20}>Twenty</MenuItem>
        //                             <MenuItem value={30}>Thirty</MenuItem>
        //                             <MenuItem value={40}>Forty</MenuItem>
        //                         </Select>
        //                     </FormControl>
        //                 </Stack>
        //             </Container>
        //         </Box>
        //         <Container sx={{ py: 8 }} maxWidth="md">
        //             {/* End hero unit */}
        //             <Grid container spacing={4}>
        //                 {cards.map((card) => (
        //                     <Grid item key={card} xs={12} sm={6} md={4}>
        //                         <Card
        //                             sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        //                         >
        //                             <CardMedia
        //                                 component="img"
        //                                 sx={{
        //                                     // 16:9
        //                                     pt: '56.25%',
        //                                 }}
        //                                 image="https://source.unsplash.com/random"
        //                                 alt="random"
        //                             />
        //                             <CardContent sx={{ flexGrow: 1 }}>
        //                                 <Typography gutterBottom variant="h5" component="h2">
        //                                     Heading
        //                                 </Typography>
        //                                 <Typography>
        //                                     This is a media card. You can use this section to describe the
        //                                     content.
        //                                 </Typography>
        //                             </CardContent>
        //                             {/*<CardActions>*/}
        //                             {/*  <Button size="small">View</Button>*/}
        //                             {/*  <Button size="small">Edit</Button>*/}
        //                             {/*</CardActions>*/}
        //                         </Card>
        //                     </Grid>
        //                 ))}
        //             </Grid>
        //         </Container>
        //     </main>
        //     {/* Footer */}
        //     <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        //         <Typography
        //             variant="subtitle1"
        //             align="center"
        //             color="text.secondary"
        //             component="p"
        //         >
        //             Something here to give the footer a purpose!
        //         </Typography>
        //         <Copyright />
        //     </Box>
        //     {/* End footer */}
        // </ThemeProvider>
    );
}