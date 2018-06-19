import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import UserView from './components/UserView';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apps" component={Users} />
    <Route exact path="/apps/:id" component={UserView} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;