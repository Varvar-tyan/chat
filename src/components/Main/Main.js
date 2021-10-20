import { Container, Grid, AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, StyledInputBase } from '../common/Search';

const Main = () => {
    return (
        <Container disableGutters>
            <Grid sx={{ height: '100vh' }} container>
                <Grid item xs={12} md={3.5}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                    <ul>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                        <li>dialog</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={8.5}>
                <AppBar position="static">
                        <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                                <MoreVertIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <ul>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                        <li>message</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;