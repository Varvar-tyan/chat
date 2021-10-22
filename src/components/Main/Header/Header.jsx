import { Container, Grid, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, StyledInputBase } from '../../common/Search';
import styles from './header-styles';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={12} md={3.5} sx={styles.flex}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.burgerIcon}>
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
                    </Grid>
                    <Grid item md={8.5} sx={styles.flexEnd}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.dotsIcon}>
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
