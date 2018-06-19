import axios from 'axios';

export const getUsers = (cb) => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: 'USERS', users: res.data }) )
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    axios.post('/api/users', { user } )
     .then( res => dispatch({ type: 'ADD_USER', user: res.data }) )
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    axios.put(`/api/users/${user.id}`, { user } )
      .then( res => dispatch({ type: 'UPDATE_USER', user: res.data }) )
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    axios.delete(`/api/users/${id}`)
      .then( () => dispatch({ type: 'DELETE_USER', id }) )
  }
}