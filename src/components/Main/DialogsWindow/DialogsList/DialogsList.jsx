import { List, Typography, Box, Avatar, Badge, ListItemButton } from '@mui/material';
import {stringAvatar} from '../../../../helpers/stringToAvatarColor'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './dialogs-list-styles';

const DialogsList = () => {
    const [selectedIndex, setSelectedIndex] = useState('')

    const handleListItemClick = (e, index) => {
        setSelectedIndex(index);
    }
    return (
        <Box sx={styles.dialogsListContainer}>
            <List disablePadding>
                <ListItemButton
                    component={Link}
                    to="/main/dialog"
                    divider
                    selected={selectedIndex === 0}
                    onClick={(e) => handleListItemClick(e, 0)}>
                    <Box sx={styles.dialogItemContainer}>
                        <Avatar {...stringAvatar('Varg Vikernes')} />
                        <Box sx={styles.dialogItemInfoContainer}>
                            <Box sx={styles.dialogItemInfo}>
                                <Typography component="span" gutterBottom>Varg Vikernes</Typography>
                                <Typography component="span" variant="caption">
                                    11:54
                                </Typography>
                            </Box>
                            <Box sx={styles.dialogItemInfo}>
                                <Box sx={styles.messageWrapper}>
                                    <Typography variant="body2" noWrap sx={styles.message}>message from your friend messagdsifjsdjfsdjfe  from your friend messagdsifjsdjfsdjf  from your friend messagdsifjsdjfsdjf</Typography>
                                </Box>
                                <Box>
                                    <Badge badgeContent={1} color="primary" sx={{ mr: 2, mb: 0.8 }}></Badge>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/main/dialog"
                    divider
                    selected={selectedIndex === 1}
                    onClick={(e) => handleListItemClick(e, 1)}>
                    <Box sx={styles.dialogItemContainer}>
                        <Avatar {...stringAvatar('Peter Steel')} />
                        <Box sx={styles.dialogItemInfoContainer}>
                            <Box sx={styles.dialogItemInfo}>
                                <Typography component="span" gutterBottom>Peter Steel</Typography>
                                <Typography component="span" variant="caption">
                                    11:54
                                </Typography>
                            </Box>
                            <Box sx={styles.dialogItemInfo}>
                                <Box sx={styles.messageWrapper}>
                                    <Typography variant="body2" noWrap sx={styles.message}>message from your friend messagdsifjsdjfsdjfe  from your friend messagdsifjsdjfsdjf  from your friend messagdsifjsdjfsdjf</Typography>
                                </Box>
                                <Box>
                                    <Badge badgeContent={7} color="primary" sx={{ mr: 2, mb: 0.8 }}></Badge>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/main/dialog"
                    divider
                    selected={selectedIndex === 2}
                    onClick={(e) => handleListItemClick(e, 2)}>
                    <Box sx={styles.dialogItemContainer}>
                        <Avatar {...stringAvatar('Alexi Laiho')} />
                        <Box sx={styles.dialogItemInfoContainer}>
                            <Box sx={styles.dialogItemInfo}>
                                <Typography component="span" gutterBottom>Alexi Laiho</Typography>
                                <Typography component="span" variant="caption">
                                    11:54
                                </Typography>
                            </Box>
                            <Box sx={styles.dialogItemInfo}>
                                <Box sx={styles.messageWrapper}>
                                    <Typography variant="body2" noWrap sx={styles.message}>message from your friend messagdsifjsdjfsdjfe  from your friend messagdsifjsdjfsdjf  from your friend messagdsifjsdjfsdjf</Typography>
                                </Box>
                                <Box>
                                    <Badge badgeContent={0} color="primary" sx={{ mr: 2, mb: 0.8 }}></Badge>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/main/dialog"
                    divider
                    selected={selectedIndex === 3}
                    onClick={(e) => handleListItemClick(e, 3)}>
                    <Box sx={styles.dialogItemContainer}>
                        <Avatar {...stringAvatar('Jjmmy Pop')} />
                        <Box sx={styles.dialogItemInfoContainer}>
                            <Box sx={styles.dialogItemInfo}>
                                <Typography component="span" gutterBottom>Jimmy Pop</Typography>
                                <Typography component="span" variant="caption">
                                    11:54
                                </Typography>
                            </Box>
                            <Box sx={styles.dialogItemInfo}>
                                <Box sx={styles.messageWrapper}>
                                    <Typography variant="body2" noWrap sx={styles.message}>message from your friend messagdsifjsdjfsdjfe  from your friend messagdsifjsdjfsdjf  from your friend messagdsifjsdjfsdjf</Typography>
                                </Box>
                                <Box>
                                    <Badge badgeContent={34} color="primary" sx={{ mr: 2, mb: 0.8 }}></Badge>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ListItemButton>
            </List>
        </Box>
    )
}

export default DialogsList;