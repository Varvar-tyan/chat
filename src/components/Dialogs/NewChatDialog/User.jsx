import { Avatar, Box, ListItemButton, Typography} from '@mui/material';
import { stringAvatar } from '../../../helpers/stringToAvatarColor';

const User = (props) => {
    return (
        <ListItemButton
        divider
        selected={props.selectedIndex === props._id}
        onClick={() => props.handleListItemClick(props._id)}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {props.avatar ? <Avatar srcSet={'http://chat.fs.a-level.com.ua/' + props.avatar.url} sx={{width: 50, height: 50, mr: 1.5}} /> : <Avatar {...stringAvatar(props.login)} />}
            <Box>
                <Typography component="span" gutterBottom>{props.login}</Typography>
            </Box>
        </Box>
    </ListItemButton>
    )
}

export default User;
