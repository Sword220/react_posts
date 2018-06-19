import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Users from './Users';
import UserView from './UserView';
import { getUsers } from '../actions/users';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchUser extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getUsers(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UserView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchUser);