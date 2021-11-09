import { Typography, Box, Avatar, Badge, ListItemButton } from '@mui/material';
import { stringAvatar } from '../../../../helpers/stringToAvatarColor'
import { Link } from 'react-router-dom';
import styles from './dialogs-list-styles';
import { refactorTime } from '../../../../helpers/refactorTime';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setMessagesTHC } from '../../../../redux/reducers/messagesReducer';

const Dialog = ({chat: {lastModified, ...chat}, setMessages, ...props}) => {
    const [lastMessage, setLastMessage] = useState('')

    useEffect(async () => {
        const messagesResult = await setMessages(chat._id)
        setLastMessage(messagesResult.messages[messagesResult.messages.length-1]?.text)
    }, [lastModified])

    return (
        <ListItemButton
            component={Link}
            to={'/main/dialog/' + chat._id}
            divider
            selected={props.selectedIndex === chat._id}
            onClick={() => props.handleListItemClick(chat._id)}>
            <Box sx={styles.dialogItemContainer}>
                <Avatar {...stringAvatar(chat.title)} />
                <Box sx={styles.dialogItemInfoContainer}>
                    <Box sx={styles.dialogItemInfo}>
                        <Typography component="span" noWrap gutterBottom sx={styles.messageWrapper}>{chat.title}</Typography>
                        <Typography component="span" variant="caption">
                            {refactorTime(lastModified)}
                        </Typography>
                    </Box>
                    <Box sx={styles.dialogItemInfo}>
                        <Box sx={styles.messageWrapper}>
                            <Typography variant="body2" noWrap sx={styles.message}>{chat.messages ? 
                            lastMessage : 'No messages here yet...'}</Typography>
                        </Box>
                        <Box>
                            <Badge badgeContent={chat.messages && chat.messages.length} color="primary" sx={{ mr: 2, mb: 0.8 }}></Badge>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ListItemButton>
    )
}


export default connect(null, {setMessages: setMessagesTHC})(Dialog);
