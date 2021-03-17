import { GET_USER, EDIT_AVATAR } from '../types/types';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, 
        user: action.payload 
      }
    case EDIT_AVATAR:
      return {...state, 
        user: action.payload 
      }  
    default:
      return state;
  }
}

