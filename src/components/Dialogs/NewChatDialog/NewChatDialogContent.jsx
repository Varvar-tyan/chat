import { Box, List, TextField } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../common/Search';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import styles from './new-chat-styles'
import { connect } from 'react-redux';
import { setUsersTHC } from '../../../redux/reducers/usersReducer';
import User from './User';
import { actionSearchUsers } from '../../../redux/saga/searchSaga';

const NewChatDialogContent = ({users, setUsers, searchUsers, ...props}) => {
    const [searchRequest, setSearchRequest] = useState('')
    const handleChange = (e) => {
        setSearchRequest(e.target.value)
        searchUsers(e.target.value)
    }

    useEffect(() => {
        setUsers()
    }, [])

    return (
        <>
            <TextField id="chat-name" label="Chat Title" variant="outlined" sx={{mb: 2, width: '100%'}} value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
            <Search sx={{ mb: 1, mr: 0 }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search users…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchRequest}
                    onChange={handleChange}
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

export default connect((state) => ({users: state.users.users}), {setUsers: setUsersTHC, searchUsers: actionSearchUsers})(NewChatDialogContent);