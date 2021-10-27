import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MessagesHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MessagesHeader;