import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography, Grid } from '@mui/material';
import maleProfile from '../Images/male-profile.jpg';
import femaleProfile from '../Images/female-profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavbarFinal from './NavbarFinal';
function AboutUs() {
    const theme = createTheme();
    return (
        <>
            <NavbarFinal />

            <ThemeProvider theme={theme}>
                <Grid container xs={10} md={12} direction="column" sx={{ paddingTop: "40px", marginLeft: "20px" }} spacing={1} justify="center">
                    <Grid container spacing={0} justify="center" alignItems="center">
                        <Card sx={{ maxWidth: 300, marginLeft: "15px", marginBottom: "20px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={femaleProfile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Shifa Maheen
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                       Frontend Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a href="https://github.com/shifamaheen/Agri-TechMate" style={{ textDecoration: "none" }} target="_blank">
                                    <Button variant="outlined" endIcon={<GitHubIcon />} style={{ borderColor: "white", color: "black" }}>
                                        CONNECT
                                    </Button></a>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 300, marginLeft: "15px", marginBottom: "20px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={maleProfile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Shaik Sohail Hussain
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                        Backend Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a href="https://github.com/shifamaheen/Agri-TechMate" style={{ textDecoration: "none" }} target="_blank">
                                    <Button variant="outlined" endIcon={<GitHubIcon />} style={{ borderColor: "white", color: "black" }}>
                                        CONNECT
                                    </Button></a>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 300, marginLeft: "15px", marginBottom: "20px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={femaleProfile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Meghana Reddy Sripathi
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                        Deep Learing Model Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a href="https://github.com/shifamaheen/Agri-TechMate" style={{ textDecoration: "none" }} target="_blank">
                                    <Button variant="outlined" endIcon={<GitHubIcon />} style={{ borderColor: "white", color: "black" }}>
                                        CONNECT
                                    </Button></a>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 300, marginLeft: "15px", marginBottom: "20px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={femaleProfile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Tejaswini Bairi
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                    Flask Backend Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a href="https://github.com/shifamaheen/Agri-TechMate" style={{ textDecoration: "none" }} target="_blank">
                                    <Button variant="outlined" endIcon={<GitHubIcon />} style={{ borderColor: "white", color: "black" }}>
                                        CONNECT
                                    </Button></a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}
export default AboutUs;
