import { IconButton, TextField, List, ListItem, Typography, Box, Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './messages-list-styles';
import imageDark from '../../../../images/back_satan.jpg';
import imageDoom from '../../../../images/back_dooml.jpg';
import { connect } from 'react-redux';
import { refactorTime } from '../../../../helpers/refactorTime';
import { setMessagesTHC } from '../../../../redux/reducers/messagesReducer';
import { promiseNewMessageTHC } from '../../../../redux/queries/queries';
import { useState } from 'react';
import { setChatsTHC } from '../../../../redux/reducers/chatsReducer';

const Message = ({ message, myId }) => {
    return (
        <ListItem sx={myId === message.owner._id ?
            styles.messageYou :
            styles.messageCompanion}>
            <Box sx={myId === message.owner._id ?
                styles.messageBubbleYou :
                styles.messageBubbleCompanion}>
                <Typography variant="body2">{message.text}</Typography>
                <Typography component="span" sx={styles.dateCaption}>{refactorTime(message.createdAt)}</Typography>
            </Box>

        </ListItem>
    )
}

const MessagesList = ({ isDarkMode, myId, messages, setMessages, addMessage, chatId, setChats }) => {
    const [messageText, setMessageText] = useState('')

    const handleSendClick = async () => {
        let result = await addMessage(messageText, chatId)

        if (result?._id) {
            setMessages(chatId)
            setMessageText('')
            setChats(myId)
        }
    }

    return (
        <>
            <Box sx={{ ...styles.messageWindowMessagesContainer, backgroundImage: `url(${isDarkMode ? imageDark : imageDoom})`, }}>
                <List>
                    {messages?.length > 0 ?
                        messages.map((message) => <Message message={message} myId={myId} key={message._id} />) :
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}><Chip label="No messages here :(" variant="filled" sx={{ color: '#fff' }} /></div>}
                </List>
            </Box>

            <Box sx={styles.messageInputCont}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.attachIcon}>
                    <AttachFileIcon />
                </IconButton>
                <TextField
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    id="standard-textarea"
                    placeholder="Write your message..."
                    multiline
                    variant="standard"
                    maxRows={6}
                    fullWidth
                    sx={styles.messageInput}
                />
                <IconButton onClick={handleSendClick} edge="start" color="inherit" aria-label="menu" sx={styles.sendIcon}>
                    <SendIcon />
                </IconButton>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    isDarkMode: state.mode.isDarkMode
})

export default connect(mapStateToProps, { addMessage: promiseNewMessageTHC, setMessages: setMessagesTHC, setChats: setChatsTHC })(MessagesList);