import {useState} from 'react';
import {Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {tokens} from '../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    

    return (
      <MenuItem
        active={selected === title}
        menuitemstyles={{
            color: colors.grey[100]
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<NavLink to={to} />}
      >
        <Typography>{title}</Typography>
        
      </MenuItem>
    );
  };
  
const Sidebarnav = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {collapseSidebar,toggled, toggleSidebar} = useProSidebar();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const {user} = useSelector((state)=> state.users);
    const toggle = ()=>{
        toggleSidebar();
        if (toggled) {
            collapseSidebar();
            setIsCollapsed(!isCollapsed);
        } else {
            collapseSidebar();
            setIsCollapsed(!isCollapsed);
        }
    }

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
            color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
            color: "#6870fa !important",
            },
        }}
        >
        <Sidebar collapsed={isCollapsed} width={'200px'}>
            <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
                onClick={() => {toggle();}}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
                }}
            >
                {!isCollapsed && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                >
                    <Typography variant="h3" color={colors.grey[100]}>
                    Aviation
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                </Box>
                )}
            </MenuItem>

            {!isCollapsed && (
                <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                    alt=""
                    width="100px"
                    height="100px"
                    src={user.photo}
                    style={{ cursor: "pointer", borderRadius: "50%" }} />
                </Box>
                <Box textAlign="center">
                    <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    >
                    {user.username}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[800]}>
                    {user.designation === "wmanager" ? "Widlife Manager" : "Wildlife Officer"}
                    </Typography>
                </Box>
                </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                title="Dashboard"
                to="dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Data
                </Typography>
                <Item
                title="Manage Team"
                to="staff"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
               
                <Item
                title="Incidents"
                to="incidents"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Leve 1 Incidents"
                to="incidentsl1"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Pages
                </Typography>
                <Item
                title="Verify Incidents"
                to="verification"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Events"
                to="events"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="FAQ Page"
                to="faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Charts
                </Typography>
                <Item
                title="Line Chart"
                to="line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Geography Chart"
                to="geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
            </Box>
            </Menu>
        </Sidebar>
        </Box>
    );
}
  
export default Sidebarnav;