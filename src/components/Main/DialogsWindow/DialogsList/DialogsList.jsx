import { List, Box} from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './dialogs-list-styles';
import { connect } from 'react-redux';
import { setChatsTHC } from '../../../../redux/reducers/chatsReducer';
import Dialog from './Dialog';
import { useHistory } from 'react-router';

const DialogsList = ({currentChat, ...props}) => {
    const history = useHistory()
    const [selectedIndex, setSelectedIndex] = useState(currentChat ? currentChat._id : 
        history.location.pathname.slice(13).length > 0 ? history.location.pathname.slice(13) : '')

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    }

    useEffect(() => {
        props.setChats(props.myId)
    }, [])

    useEffect(() => {
        currentChat && setSelectedIndex(currentChat._id)
    }, [currentChat])

    return (
        <Box sx={styles.dialogsListContainer}>
            <List disablePadding>
                {props.chats?.map((chat) => <Dialog key={chat._id} selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                    chat={chat}
                />)}
            </List>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    chats: state.chats.chats,
    myId: state.auth.payload.sub.id,
    currentChat: state.chats.currentChat
})

export default connect(mapStateToProps, { setChats: setChatsTHC })(DialogsList);