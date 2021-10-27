import { Grid } from '@mui/material';
import { Route } from 'react-router';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import MessagesList from './MessagesList/MessagesList';

const MessagesWindow = () => {
    return (
        <Grid item xs={12} md={8.5} sx={{display: 'flex', flexDirection: 'column'}}>
            <MessagesHeader />
            <MessagesList />
        </Grid>
    )
}

export default MessagesWindow;