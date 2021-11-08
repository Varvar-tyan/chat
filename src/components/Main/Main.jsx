import { Container, Grid, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import styles from './main-styles';
import { Route } from 'react-router-dom';
import DialogsWindow from './DialogsWindow/DialogsWindow';
import MessagesWindow from './MessagesWindow/MessagesWindow';
import Placeholder from './Placeholder/Placeholder';
import {connect} from 'react-redux';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
          messageDark: '#272727',
          messageColor: '#2e72c6'
      }
    }
  });

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        messageDark: '#fff',
        messageColor: '#bddeff'
    }
    },
  });

const Main = ({isDarkMode}) => {
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container disableGutters sx={styles.container}>
                <Grid sx={styles.gridContainer} container>
                    <DialogsWindow />
                    <Route path="/main" exact component={Placeholder} />
                    <Route path="/main/dialog/:id" component={MessagesWindow} />
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => ({
    isDarkMode: state.mode.isDarkMode
})

export default connect(mapStateToProps, null)(Main);