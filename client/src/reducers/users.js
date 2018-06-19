import axios from 'axios'
const USERS = 'USERS'
const ADD_USER = 'ADD_USER'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'


const users = (state = [], action ) => {
  switch(action.type) {
    case 'USERS':
      return action.users
    case 'ADD_USER':
      return [action.user, ...state]
    case 'UPDATE_USER':
      return state.map( u => {
        if (u.id === action.user.id)
          return action.user
        return u
      })
    case 'DELETE_USER':
      return state.filter( u => u.id !== action.id )
    default:
      return state;
  }
}

export default users;