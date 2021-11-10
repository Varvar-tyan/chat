import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogActions, Divider, IconButton} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import { connect } from 'react-redux';
import MyProfileDialogContent from './MyProfileDialogContent';

const MyProfileDialog = ({onClose, open}) => {
    const handleCloseClick = () => {
        onClose()
    }
    const handleDoneClick = () => {
        onClose()
    }

    return (
        <Dialog onClose={handleCloseClick} open={open} maxWidth="xs" fullWidth>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <DialogTitle>
                    My Profile
                </DialogTitle>
                <IconButton sx={{ mr: 1 }} onClick={handleCloseClick}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
            <DialogContent>
                <MyProfileDialogContent />
            </DialogContent>
            <DialogActions>
                <IconButton onClick={handleDoneClick}>
                    <DoneIcon />
                </IconButton>
            </DialogActions>
        </Dialog>
    )
}

export default MyProfileDialog;