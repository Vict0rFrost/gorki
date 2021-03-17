import { IN_SESSION, SIGNIN, LOGOUT, SIGNUP } from '../types/types'


export const userInSession = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/auth/in_session', {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    const result = await response.json();
    dispatch({ 
      type: IN_SESSION, 
      payload: result });
  };
};

export function regNewUser(input, history) {
  return async (dispatch) => {
    const request = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: 'include',
      body: JSON.stringify( input )
    });

    const result = await request.json();
    history.push('/');

    dispatch({
      type: SIGNUP,
      payload: result,
    });
  };
}

export const signinUser = (inputValue, history, setErrorValue) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/auth/signin', {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      const user = result.user;
      dispatch({ 
        type: SIGNIN, 
        payload: user 
      });
      history.push("/");
    } catch (err) {
      setErrorValue("Неверный логин или пароль")
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await fetch('http://localhost:3001/auth/logout', {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    dispatch({ 
      type: LOGOUT, 
      payload: null 
    });
  };
};
