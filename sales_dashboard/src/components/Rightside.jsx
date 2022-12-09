import { Badge, Divider, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BsInbox } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GoMail } from 'react-icons/go'
import { RiTeamFill } from 'react-icons/ri'
import Barchart from './Barchart'
import group_icon from "../icons/group-avatar.png";

const Rightside = () => {
    return (
        <div>
            <Box p="50px" pt='0px' mt="20px">
                {/* right side top-bar */}
                <Box ml='130px'>
                    <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge color="error">
                                <GoMail />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge color="error">
                                <BsInbox />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <CgProfile />
                        </IconButton>
                    </Box>
                </Box>
                {/* Earnings bar-chart */}
                <Box>
                    <Box component={"h4"} mt="40px" textAlign={"left"}>Earnings</Box>
                    <Grid
                        boxShadow={"0px 4px 50px rgba(0, 0, 0, 0.06)"}
                        borderRadius="15px"
                        bgcolor={"#FFFFFF"}
                        // p={1}
                        pt={2}
                        // pb={3}
                        height='344px'
                        width={'289px'}
                    >
                        <Box m='15px'>
                            <Typography variant="h5" color={'#A5A5A5'} fontSize='10px'>
                                Saved this month
                            </Typography>
                            <Typography fontSize='40px' fontWeight={'800'}>
                                $12,281
                            </Typography>
                            <Typography variant="h5" color={'#A5A5A5'} fontSize='10px'>
                                Your payment will be <br /> updated by the system.
                            </Typography>
                        </Box>
                        <Barchart />
                    </Grid>
                </Box>
                {/* Recent Transactions */}
                <Box>
                    <Box component={"h4"} mt="50px" textAlign={"left"}>Recent Transactions</Box>
                    <Box
                        boxShadow={"0px 4px 50px rgba(0, 0, 0, 0.06)"}
                        borderRadius="15px"
                        bgcolor={"#FFFFFF"}
                        p={3} pt={4} pb={4}
                        textAlign={'left'}
                        height={'251px'}
                        width={'289px'}
                    >
                        <Box display={"flex"} gap="6px" alignItems={"center"}>
                            <RiTeamFill />
                            <Box color={"#A5A5A5"} fontSize='10px' fontWeight={'500'} lineHeight='91.5%'>
                                Transfer to your team.
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                },
                            }}>
                            <Box display={"flex"} alignItems="center">
                                <Box component={"h1"} color="#ACACAC" fontSize='40px'>
                                    $
                                </Box>
                                <Box component={"h1"} fontSize='40px'>450</Box>
                                {/* <h1>
                                            <FaDollarSign color="#ACACAC" size={"30px"} />
                                        </h1>
                                        <h1>450</h1> */}
                            </Box>
                            <Box
                                sx={{
                                    bgcolor: "#000AFF",
                                    color: "white",
                                    borderRadius: "10px"
                                }}
                                p="10px 30px"
                                fontWeight={"800"}
                                fontSize="12px"
                            >
                                Transfer
                            </Box>
                        </Box>
                        <Divider />
                        <Box mt='20px'>
                            <img src={group_icon} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Rightside