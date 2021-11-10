import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogActions, Divider, IconButton} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import { connect } from 'react-redux';
import { promiseNewChatTHC } from '../../../redux/queries/queries';
import { useHistory } from 'react-router';
import { setChatsTHC, setChatTHC } from '../../../redux/reducers/chatsReducer';
import NewChatDialogContent from './NewChatDialogContent';

const NewChatDialog = (props) => {
    const { onClose, open } = props

    const [title, setTitle] = useState('my new chat')
    const [memberId, setMemberId] = useState('')
    let history = useHistory()

    const handleCloseClick = () => {
        onClose()
        setTitle('my new chat')
        setMemberId('')
    }

    const handleDoneClick = async () => {
        let result = await props.createNewChat(title, memberId)

        if (result._id) {
            onClose()
            setTitle('my new chat')
            setMemberId('')

            props.setChats(props.myId)
            props.setChat(result._id)

            history.push('/main/dialog/' + result._id)
        }
    }
    return (
        <Dialog onClose={handleCloseClick} open={open} maxWidth="xs" fullWidth>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <DialogTitle>
                    New Chat
                </DialogTitle>
                <IconButton sx={{ mr: 1 }} onClick={handleCloseClick}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
            <DialogContent>
                <NewChatDialogContent title={title} memberId={memberId} setTitle={setTitle} setMemberId={setMemberId} />
            </DialogContent>
            <DialogActions>
                <IconButton onClick={handleDoneClick} disabled={title.length <= 0 || memberId.length <= 0}>
                    <DoneIcon />
                </IconButton>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    myId: state.auth.payload.sub.id
})

export default connect(mapStateToProps, {createNewChat: promiseNewChatTHC, setChats: setChatsTHC, setChat: setChatTHC})(NewChatDialog);