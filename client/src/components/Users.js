import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions/users';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  users = () => {
    return this.props.users.map( user =>
      <Card key={user.id}>
        <Card.Content>
          <Card.Header>
            {user.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/users/${user.id}`}>
            View User
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Apps</Header>
          <Card.Group itemsPerRow={4}>
           { this.apps() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { users: state.users }
  }

export default connect(mapStateToProps)(Users);