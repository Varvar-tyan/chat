import { Container, Grid, IconButton, TextField, List, ListItem, Typography, Box, Avatar, Badge, ListItemButton, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import styles from './main-styles';
import MessagesWindow from './MessagesWindow/MessagesWindow';
import DialogsWindow from './DialogsWindow/DialogsWindow';
import { Route } from 'react-router-dom';
import DialogsHeader from './DialogsHeader/DialogsHeader';
import MessagesHeader from './MessagesHeader/MessagesHeader';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
          messageDark: '#272727',
          messageColor: '#2e72c6'
      }
    }
  });

const LightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        messageDark: '#fff',
        messageColor: '#bddeff'
    }
    },
  });

const Main = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container disableGutters sx={styles.container}>
                <Grid sx={styles.gridContainer} container>
                    <Grid item xs={12} md={3.5}>
                        <DialogsHeader />
                        <DialogsWindow />
                    </Grid>
                    <Grid item xs={12} md={8.5} sx={styles.messagesWindowContainer}>
                        <MessagesHeader />
                        <Route path="/main" exact component={() => <div> Select a chat to start messaging </div>} />
                        <Route path="/main/dialog" component={MessagesWindow} />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Main;