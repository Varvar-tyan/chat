import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setChatTHC } from '../../../redux/reducers/chatsReducer';
import { setMessagesTHC } from '../../../redux/reducers/messagesReducer';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import MessagesList from './MessagesList/MessagesList';

const MessagesWindow = ({match: {params: {id}}, setChat, myId, currentChat, setMessages, messages}) => {
    useEffect(() => {
        setChat(id) 
        setMessages(id, 0)
    }, [id])
    return (
        <Grid item xs={12} md={8.5} sx={{display: 'flex', flexDirection: 'column'}}>
            <MessagesHeader currentChat={currentChat} />
            <MessagesList myId={myId} messages={messages} chatId={id} />
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    myId: state.auth.payload.sub.id,
    currentChat: state.chats.currentChat,
    messages: state.messages.messages
})

export default connect(mapStateToProps, {setChat: setChatTHC, setMessages: setMessagesTHC})(MessagesWindow);