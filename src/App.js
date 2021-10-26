import './App.css';
import Main from './components/Main/Main';
import CssBaseline from '@mui/material/CssBaseline';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Redirect } from 'react-router';
import { connect, Provider } from 'react-redux';
import { store } from './redux/store';

function App({ isLoggedIn }) {
  return (
    <>
      <CssBaseline />
        {isLoggedIn && <Redirect to="/main" />}

        <Route path="/main" component={Main} />
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

const AppContainer = connect(mapStateToProps, null)(App);

function mainApp() {
  return (
    <Provider store={store}>
      <Router history={createHistory()}>
        <AppContainer />
      </Router>
    </Provider>
  )
}

export default mainApp;
