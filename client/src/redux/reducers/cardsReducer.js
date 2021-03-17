import { GET_CARDS, NEW_CARD, MY_CARDS, FAVORITE_CARDS, ADD_LIKE } from '../types/types';

export default function getCards(state = {}, action) {
  switch (action.type) {
    case GET_CARDS:
      return {...state, 
        allCards: action.payload
      }
    case NEW_CARD:
      return {...state, 
        allCards: action.payload 
      }
    case MY_CARDS:
      return {...state, 
        myCards: action.payload 
      }
    case FAVORITE_CARDS:
      return {...state, 
        favoriteCards: action.payload 
      }
    // case ADD_LIKE: 
      
    //   return {...state,
    //     allCards.indexOf(action.payload) 
    //   }
    default:
      return state;
  }
}
