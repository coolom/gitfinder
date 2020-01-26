import React, { Fragment, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { About } from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import GithubContext from "./context/github/githubContext";

const App = () => {
  const githubContext = useContext(GithubContext);

  //const { users } = githubContext;
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // const { users, loading, user } = this.state;

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title=' GitHub Finder' icon='fab fa-github' />
          <div className='container'>
            {<Alert alert={alert} />}
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}></Route>
              <Route path='/about'>
                <Fragment>
                  <About />
                </Fragment>
              </Route>
              <Route
                exact
                path='/user/:login'
                render={props => <User {...props} />}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
