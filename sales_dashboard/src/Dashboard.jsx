import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rightside from "./components/Rightside";
import Middlesection from "./components/Middlesection";
import Leftside from "./components/Leftside";
import { CssBaseline } from "@mui/material";


const mdTheme = createTheme();

function DashboardContent() {
    
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                {/* left side bar */}
                <Leftside/>
                {/* middle section */}
                <Middlesection/>
                {/* right side */}
                <Rightside/>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
