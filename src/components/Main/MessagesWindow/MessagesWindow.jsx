import * as React from 'react';
import { Container, Grid, IconButton, TextField, List, ListItem, Typography, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './messages-window-styles';

const MessagesWindow = () => {
    return (
        <>
            <Box sx={styles.messageWindowMessagesContainer}>
                <List>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">I'm a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>

                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">Me too</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">Hey, I'm also a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">wow</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">are we all messages?</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">cannot believe it </Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">I'm a little longer message than yall cause I just need you know to take more space so that our creator sees how it looks when its more text yo</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">you're a hero</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">I'm a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>

                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">Me too</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">Hey, I'm also a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">wow</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">are we all messages?</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">cannot believe it </Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">I'm a little longer message than yall cause I just need you know to take more space so that our creator sees how it looks when its more text yo</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">you're a hero</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">I'm a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>

                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">Me too</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">Hey, I'm also a message</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">wow</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">are we all messages?</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">cannot believe it </Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageYou}>
                        <Box sx={styles.messageBubbleYou}>
                            <Typography variant="body2">I'm a little longer message than yall cause I just need you know to take more space so that our creator sees how it looks when its more text yo</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={styles.messageCompanion}>
                        <Box sx={styles.messageBubbleCompanion}>
                            <Typography variant="body2">you're a hero</Typography>
                            <Typography component="span" sx={styles.dateCaption}>3 Sep 17:46</Typography>
                        </Box>
                    </ListItem>

                </List>
            </Box>
            <Box sx={styles.messageInputCont}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.attachIcon}>
                    <AttachFileIcon />
                </IconButton>
                <TextField
                    id="standard-textarea"
                    placeholder="Write your message here...."
                    multiline
                    variant="standard"
                    maxRows={6}
                    fullWidth
                    sx={styles.messageInput}
                />
                <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.sendIcon}>
                    <SendIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default MessagesWindow;