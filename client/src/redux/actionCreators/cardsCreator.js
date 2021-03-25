import { GET_CARDS, NEW_CARD, MY_CARDS, FAVORITE_CARDS, ADD_LIKE } from '../types/types'

export function getAllCards() {
 
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/cards`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });
    const result = await request.json();
    
    dispatch({
      type: GET_CARDS,
      payload: result,
    });
  };
}

export function addNewCard( file, userId, latitude, longitude ) {
 
  return async (dispatch) => {
    const data = new FormData()
    data.append("filedata", file)
    data.append("latitude", latitude)
    data.append("longitude", longitude)
    data.append("userId", userId)

    const request = await fetch(`http://localhost:3001/cards/new`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    const result = await request.json();
    
    dispatch({
      type: NEW_CARD,
      payload: result,
    });
  };
}

export function addLike(cardId, userId) {
  
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/cards/like`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        cardId, 
        userId
      }),
    });
    const result = await request.json();
    
    dispatch({
      type: ADD_LIKE,
      payload: result,
    });
  };
}

export function favoriteCards(userId) {
  
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/cards/favorite/${userId}`, {
      method: 'GET',
      credentials: 'include',
    });
    const result = await request.json();
   
    dispatch({
      type: FAVORITE_CARDS,
      payload: result,
    });
  };
}

export function myCards(userId) {
  
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/cards/author/${userId}`, {
      method: 'GET',
      credentials: 'include',
    });
    const result = await request.json();
    
    dispatch({
      type: MY_CARDS,
      payload: result,
    });
  };
}
