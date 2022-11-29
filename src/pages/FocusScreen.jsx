import React, { useRef } from 'react'
import { NavBar } from '../ui/NavBar';

export const FocusScreen = () => {

  const inputRef = useRef();

  const clickOnRef = () => {
    inputRef.current.select();
  }

  return (
    <>
    <NavBar />
      <div className='container mt-5 col-7 border p-4 rounded'>
      <h2>FocusScreen</h2>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control mb-3"
        placeholder='Ingrese Nombre'
      />
      <input
        type="text"
        className="form-control mb-3"
        placeholder='Ingrese Apellido'
      />
      <button
        className='btn btn-md btn-primary w-100'
        onClick={() => clickOnRef()}
      >
        Selecccionar
      </button>
    </div>
    </>
  )
}
