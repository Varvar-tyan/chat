import './App.css';
import Main from './components/Main/Main';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter history={createHistory()}>
        <CssBaseline>
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </CssBaseline>
      </BrowserRouter>

    </>
  )
}

export default App;
