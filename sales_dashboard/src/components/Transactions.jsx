import * as React from 'react';
import { Box, ListItemText, Typography } from '@mui/material';

const activetext = {
  color: "#000000",
  fontSize: "15px",
  fontWeight: "800",
}

export default function Transactions() {
  const [rows, setData] = React.useState([]);

    React.useEffect(() => {
        getChartData()
    }, [])
    const getChartData = () => {
        fetch('https://salesdashboardapi.onrender.com/transactions')
            .then(res => res.json())
            .then(res =>{
                setData(res)
                // console.log(res, " chart data")
            })
    }
  return (
    <Box pt='5px' pb='5px' overflow={'hidden'} >
          {rows.map((row) => (
            <Box key={row.id} display='flex' justifyContent={'space-between'} alignItems='center' m={2}>
              <Box display='flex' gap={1}>
                <Box borderRadius='10px'>
                  <img style={{borderRadius:'10px'}} width={'50px'} src={row.img} alt="" />
                </Box>
                <Box textAlign={'left'}>
                  <ListItemText primaryTypographyProps={{ style: activetext }} primary={row.name} />
                  <Typography variant="h5" color={'#A5A5A5'} fontSize='10px'>
                    {row.date}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ListItemText primaryTypographyProps={{ style: activetext }} primary={`$${row.amount}`} />
              </Box>
            </Box>
          ))}
    </Box>
  );
}