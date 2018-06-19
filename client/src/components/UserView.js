import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserView = ({ user = {} }) => (
  <Container>
    <Link to="/users">View All Users</Link>
    <Header as="h3" textAlign="center">{user.name}</Header>
    {/* <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
    </Table>*/}
  </Container> 
)

const mapStateToProps = (state, props) => {
  return { user: state.users.find( u => u.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(UserView);


