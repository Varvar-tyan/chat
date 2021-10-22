import { Container, Grid, IconButton, TextField, List, ListItem, Typography, Box, Avatar, Badge, ListItemButton } from '@mui/material';
import styles from './main-styles';
import Header from './Header/Header';
import MessagesWindow from './MessagesWindow/MessagesWindow';
import DialogsWindow from './DialogsWindow/DialogsWindow';

const Main = () => {
    return (
        <Container disableGutters sx={styles.container}>
            <Header />
            <Grid sx={styles.gridContainer} container>
                <Grid item xs={12} md={3.5}>
                    <DialogsWindow />
                </Grid>
                <Grid item xs={12} md={8.5} sx={styles.messagesWindowContainer}>
                    <MessagesWindow />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;