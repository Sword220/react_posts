import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import UserView from './components/UserView';
import NoMatch from './components/NoMatch';
// import FetchUser from './components/FetchUser'


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    {/* <Route path="/users" component={FetchUser} /> */}
    <Route exact path="/users/:id" component={UserView} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;