import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemText, ListItemIcon, Switch } from '@mui/material';
import { connect } from 'react-redux';
import { setDarkModeAC } from '../../../../redux/reducers/modeReducer';
import { logoutAC } from '../../../../redux/reducers/authReducer';
import { useHistory } from 'react-router';

const MainMenu = ({ open, anchorEl, handleClose, isDarkMode, setMode, logout }) => {
    let history = useHistory()
    function logoutRedirect() {
        logout()
        history.push('/')
    }

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => setMode(!isDarkMode)}>
                <ListItemIcon>
                    <DarkModeIcon />
                </ListItemIcon>
                <ListItemText sx={{ mr: 1 }}>Dark Mode</ListItemText>
                <Switch size="small"
                    checked={isDarkMode}
                />
            </MenuItem>
            <MenuItem onClick={() => {
                handleClose()
                logoutRedirect()

            }}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Menu>
    )
}

const mapStateToProps = (state) => ({
    isDarkMode: state.mode.isDarkMode
})

export default connect(mapStateToProps, { setMode: setDarkModeAC, logout: logoutAC })(MainMenu);