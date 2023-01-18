import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    AppBar,
    Box,
    Grid,
    Toolbar,
    Typography,
} from "@mui/material";
const Header = () => {
    return (
        <>
            <AppBar sx={{ background: "#2f3640", boxShadow: "none" }}>
                <Toolbar >
                    <Grid container alignItems="center">
                        <Box>
                            <Grid container alignItems="center">
                                <GitHubIcon sx={{ fontSize: 40, marginLeft: 5 }}/>
                            </Grid>
                        </Box>
                        <Box sx={{ marginLeft: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography>Pull requests</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Issues</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Codespaces</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Marketplace</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Explore</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{ width: "300px" }}
                            spacing={2}>
                            <Grid item>
                                <NotificationsNoneIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;