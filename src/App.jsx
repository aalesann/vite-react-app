import React, { useReducer } from 'react';
import { AuthContext } from './context/AuthContext';
import { authReducer } from './reducers/authReducer';
import { AppRouter } from './routers/AppRouter';
import './assets/App.css';
import { useEffect } from 'react';

// Se compruba si existe el token
const existeUsuario = () => {
  return localStorage.getItem('user') || { logged: false };
}



export const App = () => {

  // Config del Reducer que maneja el estado de la autenticación.
  const [user, dispatch] = useReducer(authReducer, {}, existeUsuario)



  useEffect(() => {
    if(!user){
      localStorage.removeItem('user');
    }
    localStorage.setItem('user', JSON.stringify(user));
  
  }, [user, dispatch])

  return (
    <>
      <AuthContext.Provider value={{
        user, 
        dispatch
      }}>
          <AppRouter />
      </AuthContext.Provider>
    </>
  )
}
