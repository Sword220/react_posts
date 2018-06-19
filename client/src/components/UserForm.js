import React from 'react';
import { connect } from 'react-redux'
import { updateUser, addUser } from '../actions/users'
import { Form } from 'semantic-ui-react';

class UserForm extends React.Component {
  initialState = { 
    name: '',  
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateUser : addUser
    dispatch(func(user))
    closeForm()
  }

  render() {
    const { name } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(UserForm);