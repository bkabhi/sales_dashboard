import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineArrowDown } from 'react-icons/ai'
import Smallchart from "./Smallchart";
import Reminder from "./Reminder";
import Transactions from "./Transactions";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const Middlesection = () => {
    return (
        <div>
            <Box borderRight={"0.5px solid #B7B7B7"} p='30px' pt='0px'>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: [1],
                        // width: "700px"
                    }}
                >
                    {/* middle top */}
                    <Box
                        display={"flex"}
                        justifyContent="space-between"
                        alignItems={"center"}
                        width="100%"
                        pl={2}
                    >
                        <Typography
                            variant="h5"
                            noWrap
                            component={'div'}
                            sx={{ display: { xs: "block", sm: "block" } }}
                        >
                            <h2>Hello, John 👋</h2>
                        </Typography>
                        <Box sx={{
                            width: "339px",
                        }}>
                            <Search
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "12px",
                                    backgroundColor: "#F5F5F5",
                                    // width: "339px",
                                    height: "43px",
                                }}
                            >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    sx={{ fontSize: "14px", color: "black" }}
                                    placeholder="Search"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </Box>
                    </Box>
                </Box>
                <Container>
                    {/* <Grid container spacing={3}> */}
                    <Box display={'flex'}>
                        {/* Analytics */}
                        <Box >
                            <Box component={"h4"} textAlign={"left"}>Analytics</Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 280,
                                    width: 420
                                }}
                                // p={4}
                                pt={2}
                                boxShadow={"0px 4px 50px rgba(0, 0, 0, 0.06)"}
                                borderRadius="10px"
                                bgcolor={"#FFFFFF"}
                            >
                                <Box display={'flex'} justifyContent='space-between' alignItems={'center'} pl='25px' pr='20px' m='10px'>
                                    <Box
                                        sx={{
                                            bgcolor: "#525252",
                                            color: "white",
                                            borderRadius: "10px",
                                            width: "73px",
                                        }}
                                        p="3px"
                                        fontWeight={"800"}
                                        fontSize="8px"
                                    >
                                        Income  <AiOutlineArrowDown />
                                    </Box>
                                    <Box display={'flex'} gap='10px' alignItems={'center'}>
                                        <Typography variant="h5" color={'#A5A5A5'} fontSize='8px'>
                                            Sort by
                                        </Typography>
                                        <Box
                                            sx={{
                                                bgcolor: "#FFFFFF",
                                                color: "black",
                                                borderRadius: "10px",
                                                width: "73px",
                                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
                                            }}
                                            p="3px"
                                            fontWeight={"800"}
                                            fontSize="8px"
                                        >
                                            Month  <AiOutlineArrowDown />
                                        </Box>
                                    </Box>
                                </Box>
                                <Chart />
                            </Box>
                        </Box>
                        {/* Recent Reminder */}
                        <Box >
                            <Box component={"h4"} textAlign={"left"} ml={4}>Reminder</Box>
                            <Paper
                                sx={{
                                    bgcolor: "#0038FF",
                                    color: "#fff",
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 280,
                                    width: 200,
                                    borderRadius: "15px",
                                    ml: 4
                                }}
                            >
                                <Reminder />
                            </Paper>
                        </Box>
                    </Box>
                    {/* Recent Recent Transactions Orders  */}
                    <Box display={'flex'} mt='15px'>
                        <Grid>
                            <Box component={"h4"} textAlign={"left"}>Recent Transactions</Box>
                            <Box
                                sx={{
                                    p: 2, display: "flex", flexDirection: "column",
                                    width: 338,
                                    height: 344,
                                }}
                                boxShadow={"0px 4px 50px rgba(0, 0, 0, 0.06)"}
                                borderRadius="10px"
                                bgcolor={"#FFFFFF"}
                                p={1}
                                pt={2} pb={3}
                            >
                                <Transactions />
                            </Box>
                        </Grid>
                        {/* Recent Transactions chart  middle */}
                        <Grid>
                            <Box component={"h4"} textAlign={"left"} ml={4}>Recent Transactions</Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: '289px',
                                    height: '344px',
                                }}
                                p={1}
                                pt={2} pb={2} pl={2} ml={4}
                                boxShadow={"0px 4px 50px rgba(0, 0, 0, 0.06)"}
                                borderRadius="10px"
                                bgcolor={"#FFFFFF"}
                            >
                                <Box p='40px' pb mb='0px'>
                                    <Typography variant="h5" color={'#A5A5A5'} fontSize='10px' >
                                        Accounts reached
                                    </Typography>
                                    <Typography fontSize='40px' fontWeight={'800'}>
                                        11,756
                                    </Typography>
                                    <Box m='5px' display={'flex'} justifyContent='space-around' alignItems={'center'}>
                                        <Box sx={{ cursor: 'pointer', "&:hover": { color: "#474747" } }} color={'#BCBCBC'} fontWeight='900' fontSize='12px'>
                                            Day
                                        </Box>
                                        <Box sx={{ cursor: 'pointer', "&:hover": { color: "#474747" } }} color={'#BCBCBC'} fontWeight='900' fontSize='12px'>
                                            Week
                                        </Box>
                                        <Box sx={{ cursor: 'pointer', "&:hover": { color: "#474747" } }} color={'#474747'} fontWeight='900' fontSize='12px'>
                                            Month
                                        </Box>
                                        <Box sx={{ cursor: 'pointer', "&:hover": { color: "#474747" }, }} color={'#BCBCBC'} fontWeight='900' fontSize='12px'>
                                            Year
                                        </Box>
                                    </Box>
                                </Box>
                                <Smallchart />
                            </Box>
                        </Grid>
                    </Box>
                    {/* </Grid> */}
                </Container>
            </Box>
        </div>
    )
}

export default Middlesection