import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, DialogActions, DialogContentText, Button } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

const ConfirmationDialog = ({ onClose, open }) => {
    const handleCloseClick = () => {
        onClose()
    }
    const handleDoneClick = () => {
        onClose()
    }

    return (
        <Dialog onClose={handleCloseClick} open={open} maxWidth="xs" fullWidth>
            <DialogTitle id="alert-dialog-title">
                {"You cannot delete the chat."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your choice doesn't matter.
                </DialogContentText>
            </DialogContent>
            <DialogActions>

                <Button onClick={handleCloseClick}>Cancel</Button>
                <Button onClick={handleDoneClick} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationDialog;