import React, { useContext } from 'react'
import { AuthContex } from '../../auth/AuthContext'
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContex);

  const handleLogin = () =>{
    dispatch({
      type:types.login,
      payload:{
        name:'Santiago'
      }
    });
    navigate("/");
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />
        <button
          className='btn btn-primary'
          onClick={handleLogin}
        >
          Login
        </button>
    </div>
  )
}
