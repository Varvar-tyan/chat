import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../common/Search';
import { useState } from 'react';
import MainMenu from './MainMenu';
import { connect } from 'react-redux';
import { actionSearchChats } from '../../../../redux/saga/searchSaga';

const DialogsHeader = ({searchChats}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [searchRequest, setSearchRequest] = useState('')
    const handleChange = (e) => {
        setSearchRequest(e.target.value)
        searchChats(e.target.value)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <MainMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchRequest}
                        onChange={handleChange}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    )
}

export default connect(null, {searchChats: actionSearchChats})(DialogsHeader);