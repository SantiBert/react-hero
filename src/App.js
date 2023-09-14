import React, { useEffect, useReducer } from 'react'
import {AppRouter} from './routers/AppRouter';
import { AuthContex } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || { logged:false };
}

const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect( () =>{
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContex.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContex.Provider>
    
  )
}

export default App