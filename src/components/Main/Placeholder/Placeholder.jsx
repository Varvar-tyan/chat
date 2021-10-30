import styles from './placeholder-styles.js';
import { Box, Chip, Grid } from '@mui/material';
import imageDark from '../../../images/back_satan.jpg';
import imageDoom from '../../../images/back_dooml.jpg';
import {connect} from 'react-redux';

const Placeholder = ({isDarkMode}) => {
    return (
        <Grid item xs={12} md={8.5}>
            <Box sx={{...styles.placeholderContainer, backgroundImage: `url(${isDarkMode ? imageDark : imageDoom})`,}}> 
            <Chip label="Select a chat to start messaging..." variant="filled" sx={{color: '#fff'}} />
            </Box>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    isDarkMode: state.mode.isDarkMode
})

export default connect(mapStateToProps, null)(Placeholder);