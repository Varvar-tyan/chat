import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemText, ListItemIcon, Switch } from '@mui/material';
import { connect } from 'react-redux';
import { setDarkModeAC } from '../../../../redux/reducers/modeReducer';
import { logoutAC } from '../../../../redux/reducers/authReducer';
import { useHistory } from 'react-router';
import { useState } from 'react';
import NewChatDialog from '../../../Dialogs/NewChatDialog/NewChatDialog';
import MyProfileDialog from '../../../Dialogs/MyProfileDialog/MyProfileDialog';

const MainMenu = ({ open, anchorEl, handleClose, isDarkMode, setMode, logout }) => {
    let history = useHistory()
    function logoutRedirect() {
        logout()
        history.push('/')
    }

    const [openNewChatDialog, setOpenNewChatDialog] = useState(false)

    const handleClickOpenNewChatDialog = () => {
        handleClose()
        setOpenNewChatDialog(true)
    };
    const handleCloseNewChatDialog = () => {
        setOpenNewChatDialog(false)
    };

    const [openMyProfileDialog, setOpenMyProfileDialog] = useState(false)

    const handleClickOpenMyProfileDialog = () => {
        handleClose()
        setOpenMyProfileDialog(true)
    };
    const handleCloseMyProfileDialog = () => {
        setOpenMyProfileDialog(false)
    };

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClickOpenNewChatDialog}>
                    <ListItemIcon>
                        <ChatBubbleIcon />
                    </ListItemIcon>
                    <ListItemText>New Chat</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClickOpenMyProfileDialog}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>My Profile</ListItemText>
                </MenuItem>
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
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </Menu>
            <NewChatDialog onClose={handleCloseNewChatDialog} open={openNewChatDialog} />
            <MyProfileDialog onClose={handleCloseMyProfileDialog} open={openMyProfileDialog} />
        </>
    )
}

const mapStateToProps = (state) => ({
    isDarkMode: state.mode.isDarkMode
})

export default connect(mapStateToProps, { setMode: setDarkModeAC, logout: logoutAC })(MainMenu);