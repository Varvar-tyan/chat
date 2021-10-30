import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, DialogActions, Divider, IconButton, List, ListItemButton, Typography, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { Search, SearchIconWrapper, StyledInputBase } from '../../common/Search';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import styles from './new-chat-styles'
import { stringAvatar } from '../../../helpers/stringToAvatarColor';
import { connect } from 'react-redux';
import { setUsersTHC } from '../../../redux/reducers/usersReducer';
import { promiseNewChatTHC } from '../../../redux/queries/queries';
import { useHistory } from 'react-router';

const NewChat = ({users, setUsers, ...props}) => {
    const [searchRequest, setSearchRequest] = useState('')

    useEffect(() => {
        setUsers()
    }, [])

    return (
        <>
            <TextField id="chat-name" label="Chat Name" variant="outlined" sx={{mb: 2, width: '100%'}} value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
            <Search sx={{ mb: 1, mr: 0 }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search users…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchRequest}
                    onChange={(e) => setSearchRequest(e.target.value)}
                />
            </Search>
            <Box sx={styles.usersListContainer}>
                <List disablePadding sx={{mb: 0}}>
                    {users?.filter((user) => !!user.login)
                    .map((user) => <User key={user._id} selectedIndex={props.memberId} handleListItemClick={(index) => props.setMemberId(index)} {...user}/>)}
                </List>
            </Box>
        </>
    )
}

const NewChatContainer = connect((state) => ({users: state.users.users}), {setUsers: setUsersTHC})(NewChat)

const User = (props) => {
    return (
        <ListItemButton
        divider
        selected={props.selectedIndex === props._id}
        onClick={() => props.handleListItemClick(props._id)}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {props.avatar ? <Avatar srcSet={'http://chat.fs.a-level.com.ua/' + props.avatar.url} sx={{width: 50, height: 50, mr: 1.5}} /> : <Avatar {...stringAvatar(props.login)} />}
            <Box sx={styles.dialogItemInfo}>
                <Typography component="span" gutterBottom>{props.login}</Typography>
            </Box>
        </Box>
    </ListItemButton>
    )
}

const NewChatDialog = (props) => {
    const { onClose, open } = props

    const [title, setTitle] = useState('my_new_chat')
    const [memberId, setMemberId] = useState('')
    let history = useHistory()

    const handleDoneClick = async () => {
        let result = await props.createNewChat(title, memberId)
        console.log(result)

        if (result._id) {
            onClose()
            history.push('dialog/' + memberId)
        }
    }
    return (
        <Dialog onClose={() => onClose()} open={open} maxWidth="xs" fullWidth>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <DialogTitle>
                    New Chat
                </DialogTitle>
                <IconButton sx={{ mr: 1 }} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
            <DialogContent>
                <NewChatContainer title={title} memberId={memberId} setTitle={setTitle} setMemberId={setMemberId} />
            </DialogContent>
            <DialogActions>
                <IconButton onClick={handleDoneClick} disabled={title.length <= 0 || memberId.length <= 0}>
                    <DoneIcon />
                </IconButton>
            </DialogActions>
        </Dialog>
    )
}

export default connect(null, {createNewChat: promiseNewChatTHC})(NewChatDialog);