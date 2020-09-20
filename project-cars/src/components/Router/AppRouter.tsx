import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import classes from './AppRouter.module.scss';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Items from './Items/Items';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className={classes.Navbar}>
          <AppBar
            position="static"
            classes={{
              root: classes.bgBlack,
            }}
          >
            <Toolbar>
              <Typography variant="h6">Project Cars</Typography>
              <Items/>
            </Toolbar>
          </AppBar>

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default AppRouter;
