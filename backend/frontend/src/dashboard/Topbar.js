import {Box, IconButton, useTheme, Tooltip} from '@mui/material';
import { useContext, useEffect } from 'react';
import { ColorModeContext, tokens } from '../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeUser, logout } from '../state/slices/userSlice';
 
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const {user} = useSelector((state)=> state.users)
    const dispatch= useDispatch();
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*search bar */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ml: 2, flex: 1}} placeholder='Search' name='search' />
                <IconButton type='button' sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display={'flex'}>
                <Tooltip title="mode">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />):(<LightModeOutlinedIcon />)}
                    </IconButton>
                </Tooltip>
                {user.username ? 
                <>
                <Tooltip title="notification">
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="settings">
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="profile">
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="logout">
                    <IconButton onClick={()=> dispatch(logout())}>
                    <NavLink to='sign-in' ><HowToRegOutlinedIcon /> </NavLink>
                    </IconButton>
                </Tooltip>
                </>
                :
                <>
                <Tooltip title="sign up">
                    <IconButton>
                    <NavLink to='sign-up'><HowToRegOutlinedIcon /> </NavLink>
                    </IconButton>
                </Tooltip>
                <Tooltip title="sign in">
                    <IconButton>
                    <NavLink to='sign-in'><HowToRegOutlinedIcon /> </NavLink>
                    </IconButton>
                </Tooltip>
                </>
                }
            </Box>
        </Box>
        );
}
 
export default Topbar;