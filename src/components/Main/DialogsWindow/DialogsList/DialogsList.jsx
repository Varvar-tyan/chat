import { List, Box} from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './dialogs-list-styles';
import { connect } from 'react-redux';
import { setChatsTHC } from '../../../../redux/reducers/chatsReducer';
import Dialog from './Dialog';
import { useHistory } from 'react-router';

const DialogsList = (props) => {
    const [selectedIndex, setSelectedIndex] = useState('')

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    }

    useEffect(() => {
        props.setChats(props.myId)
    }, [])

    console.log(props)

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
    myId: state.auth.payload.sub.id
})

export default connect(mapStateToProps, { setChats: setChatsTHC })(DialogsList);