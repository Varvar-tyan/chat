import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatTitle from './ChatTitle';
import { useState } from 'react';
import ChatMenu from './ChatMenu';

const MessagesHeader = ({currentChat}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <ChatTitle currentChat={currentChat} />
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }} onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <ChatMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MessagesHeader;