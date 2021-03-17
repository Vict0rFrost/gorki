import { IN_SESSION, LOGOUT, SIGNUP, SIGNIN } from "../types/types";

export default function authReducer(state = "", action) {
  switch (action.type) {
    case IN_SESSION:
      return { ...state, 
        userSession: action.payload 
      };
    case LOGOUT:
      return { ...state, 
        userSession: action.payload 
      };
    case SIGNUP:
      return { ...state, 
        userSession: action.payload 
      };
    case SIGNIN:
      return { ...state, 
        userSession: action.payload 
      };
    default:
      return state;
  }
}
