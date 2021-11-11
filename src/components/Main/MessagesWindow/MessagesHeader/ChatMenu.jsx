import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemText, ListItemIcon, Switch } from '@mui/material';
import { connect } from 'react-redux';
import { setDarkModeAC } from '../../../../redux/reducers/modeReducer';
import { logoutTHC } from '../../../../redux/reducers/authReducer';
import { useHistory } from 'react-router';
import { useState } from 'react';
import NewChatDialog from '../../../Dialogs/NewChatDialog/NewChatDialog';
import MyProfileDialog from '../../../Dialogs/MyProfileDialog/MyProfileDialog';

const ChatMenu = ({open, anchorEl, handleClose}) => {
    // let history = useHistory()
    // function logoutRedirect() {
    //     logout()
    //     history.push('/')
    // }

    // const [openNewChatDialog, setOpenNewChatDialog] = useState(false)

    // const handleClickOpenNewChatDialog = () => {
    //     handleClose()
    //     setOpenNewChatDialog(true)
    // };
    // const handleCloseNewChatDialog = () => {
    //     setOpenNewChatDialog(false)
    // };

    // const [openMyProfileDialog, setOpenMyProfileDialog] = useState(false)

    // const handleClickOpenMyProfileDialog = () => {
    //     handleClose()
    //     setOpenMyProfileDialog(true)
    // };
    // const handleCloseMyProfileDialog = () => {
    //     setOpenMyProfileDialog(false)
    // };

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
                <MenuItem onClick={() => {
                    handleClose()

                }}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}

export default ChatMenu;