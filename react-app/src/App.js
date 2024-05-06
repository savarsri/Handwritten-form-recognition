import React, { Component } from 'react';
import './App.css';
import MarkTemp from './MarkTemp';
import Login from './Login';
import Signup from './Signup';
import ViewUsers from './ViewUsers';
import Logout from './Logout';
import PrevTemplates from './PrevTemplates';
import ShowTemplate from './ShowTemplate';
import ShowData from './ShowData';
import GetData from './GetData';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import ViewData from './ViewData';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#808080'
    }
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin : localStorage.getItem("username")
    }
  }

  render() {
    let dict = {};
    if(this.state.loggedin==null){
      dict['Signup/Login']='/login';
    }
    else{
      dict['Mark Template']='/marktemp';
      dict['Get Data']='/getdata';
      dict['Previous Templates']='/prevtemplates';
      if(this.state.loggedin==="admin"){
        dict['View Users'] = '/users';
      }
      dict['Logout']='/logout';
    }
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <PersistentDrawerLeft options={dict} >
          <Switch>
            <Route exact path = '/' component = {Login} />
            <Route exact path = '/marktemp' component = {MarkTemp} />
            <Route exact path = '/login' component = {Login} />
            <Route exact path = '/signup' component = {Signup} />
            <Route exact path = '/users' component = {ViewUsers} />
            <Route exact path = '/logout' component = {Logout} />
            <Route exact path = '/prevtemplates' component = {PrevTemplates} />
            <Route exact path = '/template/:tid' component = {ShowTemplate} />
            <Route exact path = '/data/:tid' component = {ShowData} />
            <Route exact path = '/getdata' component = {GetData} />
            <Route exact path = '/viewdata/:tid/:did' component = {ViewData} />
          </Switch>
          </PersistentDrawerLeft>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
