import { Avatar, Box, Typography } from '@mui/material';
import { stringAvatar } from '../../../../helpers/stringToAvatarColor';


const ChatTitle = ({ currentChat }) => {
    console.log(currentChat)
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
                <Typography>{currentChat && currentChat.title}</Typography>
                <Typography variant="caption" gutterBottom>
                    members: {currentChat && currentChat.members.length}
                </Typography>
            </Box>
        </Box>
    )
}

export default ChatTitle;