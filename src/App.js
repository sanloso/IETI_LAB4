import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import Menu from './menu/Menu';
import NewTask from './task/NewTask';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('isLoggedIn')){
      localStorage.setItem('isLoggedIn', false);
    }
    localStorage.setItem('username', 'santiago');
    localStorage.setItem('password', 'admin');
  }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route path="/newTask" >
              {!JSON.parse(localStorage.getItem("isLoggedIn")) ? <Redirect to="/" />  : <NewTask/>}
            </Route>
            <Route path="/home" >
              {!JSON.parse(localStorage.getItem("isLoggedIn")) ? <Redirect to="/" /> : <Menu/>}
            </Route>
            <Route exact path="/">
              {JSON.parse(localStorage.getItem("isLoggedIn")) ? <Redirect to="/home" /> :  <Login/> }
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;