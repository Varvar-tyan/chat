import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setChatTHC } from '../../../redux/reducers/chatsReducer';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import MessagesList from './MessagesList/MessagesList';

const MessagesWindow = ({match: {params: {id}}, setChat, myId, currentChat}) => {
    useEffect(() => {
        setChat(id)
    }, [id])
    return (
        <Grid item xs={12} md={8.5} sx={{display: 'flex', flexDirection: 'column'}}>
            <MessagesHeader />
            <MessagesList myId={myId} currentChat={currentChat} />
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    myId: state.auth.payload.sub.id,
    currentChat: state.chats.currentChat
})

export default connect(mapStateToProps, {setChat: setChatTHC})(MessagesWindow);