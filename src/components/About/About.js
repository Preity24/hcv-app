import React, {useEffect, useState} from "react";
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import banner from '../../assets/images/Website-Banners.png';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import avatar_lisa from '../../assets/images/Lisa-Avatar.png';
import avatar_preeti from '../../assets/images/Preeti-Avatar.png';
import avatar_ruoyu from '../../assets/images/Ruoyu-Avatar.png';
import avatar_lidia from '../../assets/images/Lidia-Avatar.png';
import avatar_sanjana from '../../assets/images/Sanjana-Avatar.png';
import avatar_velie from '../../assets/images/Velie-Avatar.png';
import avatar_tina from '../../assets/images/Tina-Avatar.png';
import avatar_zimo from '../../assets/images/ZimoYang-cropped.png';
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { useTheme } from "@mui/styles";
import CardHeader from "@mui/material/CardHeader";

const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const SizedAvatar = styled(Avatar)`
  ${({ size }) => `
    width: ${useTheme().spacing(size)}px; 
    height: ${useTheme().spacing(size)}px; 
  `};
`;

function SizedAvatars(image) {
    return (
        <AvatarContainer>
            <SizedAvatar
                size={20}
                src={image}
            >
                default
            </SizedAvatar>
        </AvatarContainer>
    );
}


const useStyles = makeStyles(  theme => ({
    card:{
        backgroundColor: 'white',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },
    media: {
        height: 800,
        width: 1800,
        margin: 'auto'

    },
    custom: {
        color: "#5E5996",
        fontWeight: "bold",
    }
}));

export default function About() {
    const classes = useStyles();
    return(
        <Box>
            <Box sx={{
                p: 3
            }}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={banner}
                    />
                </Card>
            </Box>
            <Box sx={{pb : 8}}>
                <Typography gutterBottom variant="h3" component="h2">
                    <strong>Our Team</strong>
                </Typography>
            </Box>
            <Container sx={{mx: 15}}>
                <Stack direction="row" spacing={8.6} sx={{pb: 20}} alignItems="center">
                    <CardHeader
                        avatar={SizedAvatars(avatar_lisa)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Lisa Guiotoko</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Database Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_preeti)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Preeti Kumari</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Web App Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_ruoyu)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Ruoyu Lu</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Database Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_lidia)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Lidia Ortiz Zamora</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Database Team</strong></Typography>}
                    />
                </Stack>
                <Stack direction="row" spacing={6.9} alignItems="center">
                    <CardHeader
                        avatar={SizedAvatars(avatar_sanjana)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Sanjana Parmar</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Database Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_velie)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Velie-Velia Sando</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Database Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_tina)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Tina Wu</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Web App Team</strong></Typography>}
                    />
                    <CardHeader
                        avatar={SizedAvatars(avatar_zimo)}
                        title={<Typography noWrap={true} variant={"h6"} className={classes.custom}><strong>Zimo Yang</strong></Typography>}
                        subheader={<Typography noWrap={true} variant={"subtitle"}><strong>Web App Team</strong></Typography>}
                    />
                </Stack>
            </Container>
        </Box>



    )
};

