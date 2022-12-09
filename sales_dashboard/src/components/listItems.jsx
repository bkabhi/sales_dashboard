import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import overview from '../icons/overview.png';
import products from '../icons/products.png';
import Analytics from '../icons/analytics.png';
import Schedule from '../icons/schedule.png';
import Payout from '../icons/payout.png';
import Statement from '../icons/statement.png';
import Help from '../icons/help.png';
import Community from '../icons/community.png';
import Settings from '../icons/settings.png';
import Logout from '../icons/logout.png';
const text = {
    color: "#9E9E9E",
    fontSize: "15px",
    fontWeight: "800"
};
const activetext = {
    color: "#000000",
    fontSize: "15px",
    fontWeight: "800",
}
export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                {/* <AccountBalanceWalletIcon /> */}
                <img src={overview} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: activetext }} primary="Overview" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <ShoppingCartIcon /> */}
                <img src={products} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Products" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <LegendToggleIcon /> */}
                <img src={Analytics} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Analytics" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <CalendarMonthIcon /> */}
                <img src={Schedule} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Schedule" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <PaidIcon /> */}
                <img src={Payout} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Payout" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <DescriptionIcon /> */}
                <img src={Statement} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Statements" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                {/* <ContactSupportIcon /> */}
                <img src={Help} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Help" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <MessageIcon /> */}
                <img src={Community} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Community" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <SettingsIcon /> */}
                <img src={Settings} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Settings" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                {/* <LogoutIcon /> */}
                <img src={Logout} alt="" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Logout" />
        </ListItemButton>
    </React.Fragment>
);