import { useEffect } from "react";
import { connect } from "react-redux";
import { setMyProfileTHC } from "../../../redux/reducers/usersReducer";
import { Box, Chip, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { refactorTime } from '../../../helpers/refactorTime';
import Dropzone from "../../common/Dropzone";

const MyProfileDialogContent = ({ myProfile, myId, setMyProfile }) => {
    useEffect(() => {
        setMyProfile(myId)
    }, [])
    console.log(myProfile)
    return (
        <Box>
            <Box sx={{ height: '250px',  display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', mb: 1 }}>
                {myProfile?.avatar ?
                    <img src={'http://chat.fs.a-level.com.ua/' + myProfile.avatar.url} height='100%' /> :
                    <Chip label="No avatar" variant="filled" />}
            </Box>
            <Box>
                <Accordion disableGutters square>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{py: 0}}
                    >
                        <InsertPhotoIcon fontSize="large" sx={{mr: 2.5}} />
                        <Typography sx={{lineHeight: 2.3}}>Set Avatar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Dropzone />
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box>
                <List sx={{pl: 2}}>
                    <ListItem disablePadding>
                        <ListItemIcon><AccountCircleIcon fontSize="large" /></ListItemIcon>
                        <ListItemText>
                            <Typography variant="caption">
                                Login
                            </Typography>
                            <Typography>
                            {myProfile?.login}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon><CalendarTodayIcon fontSize="large" /></ListItemIcon>
                        <ListItemText>
                            <Typography variant="caption">
                                Profile created
                            </Typography>
                            <Typography>
                            {refactorTime(myProfile?.createdAt)}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>

        </Box>

    )
}

const mapStateToProps = (state) => ({
    myProfile: state.users.myProfile,
    myId: state.auth.payload.sub.id
})

export default connect(mapStateToProps, { setMyProfile: setMyProfileTHC })(MyProfileDialogContent);
