import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Reminder() {
    return (
        <Box p='10px'>
            <Typography variant="h5" fontSize={'13px'} fontWeight='800'>
                Agency Design Kit
            </Typography>
            <Box m='15px 35px' borderRadius={'15px'} p='15px' pt='20px' bgcolor='#fff'>
                <img width={'30px'} src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" alt="" />
            </Box>
            <Typography color="#fff" fontSize={'12px'} fontWeight='800' m='20px auto'>
                Will be published <br /> Nov 25, 2022
            </Typography>
            <div>
            <Box sx={{bgcolor:'#fff', color:'black',  
                borderRadius:'10px'}} p='8px 15px' fontWeight={'800'}  
                fontSize='12px'>
                    Set as Reminder
                </Box>
            </div>
        </Box>
    );
}