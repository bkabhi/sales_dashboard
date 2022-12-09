import styled from '@emotion/styled';
import { Divider, List, Toolbar } from '@mui/material'
import MuiDrawer from "@mui/material/Drawer";
import { Box } from '@mui/system';
import React from 'react'
import { mainListItems, secondaryListItems } from './listItems';

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));
const Leftside = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
            <Drawer
                variant="permanent"
                open={open}
                sx={{ width: "247px", pl: "20px" }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: [1],
                    }}
                >
                    <Box p="20px">
                        <Box
                            component="h1"
                            fontSize={"45px"}
                            fontWeight="800"
                            color={"#0038FF"}
                            letterSpacing="-0.055em"
                        >
                            LOGO
                        </Box>
                    </Box>
                </Toolbar>
                <List component="nav">
                    {mainListItems}
                    <Divider sx={{ width: "70%", m: "auto", my: 5 }} />
                    {secondaryListItems}
                </List>
            </Drawer>
    )
}

export default Leftside