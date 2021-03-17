import { GET_USER, EDIT_AVATAR } from '../types/types'

export function getUser(userId) {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/user/${userId}`, {
      method: "GET",
      credentials: 'include'
    })

    const result = await response.json();

    dispatch({
      type: GET_USER,
      payload: result
    })
  }
}

export function editAvatar(file, userId) {

  return async (dispatch) => {
    const data = new FormData()
    data.append("filedata", file)
    
    const response = await fetch(`http://localhost:3001/user/upload/${userId}`, {
      method: "POST",
      body: data,
      credentials: 'include'
    })

    const result = await response.json();

    dispatch({
      type: EDIT_AVATAR,
      payload: result
    })
  }
}
