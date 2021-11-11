import { Box, List, TextField } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../common/Search';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import styles from './new-chat-styles'
import { connect } from 'react-redux';
import { loadMoreUsersTHC, setTotalUsersCountTHC, setUsersSkipAC, setUsersTHC } from '../../../redux/reducers/usersReducer';
import User from './User';
import { actionSearchUsers } from '../../../redux/saga/searchSaga';

const NewChatDialogContent = ({users, usersSkip, totalUsersCount, setUsers, searchUsers, loadUsers, setTotalUsers, ...props}) => {
    const [searchRequest, setSearchRequest] = useState('')
    const handleChange = (e) => {
        setSearchRequest(e.target.value)
        searchUsers(e.target.value)
    }

    const listInnerRef = useRef()
    const onScroll = () => {
        // console.log('scrollHeight: ', listInnerRef.current.scrollHeight, 'top: ', listInnerRef.current.scrollTop, 'client: ', listInnerRef.current.clientHeight )
        if (listInnerRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = listInnerRef.current
            if (scrollTop + clientHeight > (scrollHeight - 1) && searchRequest.length <= 0) {
                console.log('scrolled to bottom')
                if (users.length < totalUsersCount) {
                    loadUsers(usersSkip)
                }
            }
        }
    }

    useEffect(() => {
        setTotalUsers()
        setUsers(0)
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
            <Box sx={styles.usersListContainer} onScroll={() => onScroll()} ref={listInnerRef}>
                <List disablePadding sx={{mb: 0}}>
                    {users?.filter((user) => !!user.login)
                    .map((user) => <User key={user._id} selectedIndex={props.memberId} handleListItemClick={(index) => props.setMemberId(index)} {...user}/>)}
                </List>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    usersSkip: state.users.usersSkip,
    totalUsersCount: state.users.totalUsersCount
})

export default connect(mapStateToProps, {setUsers: setUsersTHC, searchUsers: actionSearchUsers, loadUsers: loadMoreUsersTHC, setTotalUsers: setTotalUsersCountTHC})(NewChatDialogContent);