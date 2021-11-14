import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemText, ListItemIcon, Switch } from '@mui/material';
import { connect } from 'react-redux';
import { setDarkModeAC } from '../../../../redux/reducers/modeReducer';
import { logoutTHC } from '../../../../redux/reducers/authReducer';
import { useHistory } from 'react-router';
import { useState } from 'react';
import ConfirmationDialog from '../../../Dialogs/ConfirmationDialog/ConfirmationDialog';

const ChatMenu = ({open, anchorEl, handleClose}) => {

    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false)

    const handleClickOpenConfirmationDialog = () => {
        handleClose()
        setOpenConfirmationDialog(true)
    };
    const handleCloseConfirmationDialog = () => {
        setOpenConfirmationDialog(false)
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
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'right',
                //   }}
                //   transformOrigin={{
                //     vertical: 'top',
                //     horizontal: 'right',
                //   }}
            >
                <MenuItem onClick={() => {
                    handleClose()

                }}>
                    <ListItemIcon onClick={handleClickOpenConfirmationDialog}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText>Delete Chat</ListItemText>
                </MenuItem>
            </Menu>
            <ConfirmationDialog onClose={handleCloseConfirmationDialog} open={openConfirmationDialog}  />
        </>
    )
}

export default ChatMenu;