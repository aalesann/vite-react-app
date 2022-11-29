import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { type } from '../types/types';

export const NavBar = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext)
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            types: type.LOGOUT,
        });
        navigate('/login', { replace: true });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='#!'>TLP II</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={(isActive) => `${isActive && 'active'} nav-link`} to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(isActive) => `${isActive && 'active'} nav-link`} to='/todos'>Todos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(isActive) => `${isActive && 'active'} nav-link`} to='/breaking-bad'>BreakingBad</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(isActive) => `${isActive && 'active'} nav-link`} to='/chat'>Chat</NavLink>
                            </li>
                        </ul>
                        <ul className='navbar-nav w-100'>
                            <ul className='navbar-nav ms-auto'>
                                <li className='nav nav-item px-4'>
                                    <NavLink
                                        to="#!"
                                        className="nav-link" style={{ fontSize: '18px' }}
                                    >
                                        {user.username}
                                    </NavLink>
                                </li>
                                <li className='nav nav-item px-4'>
                                    <NavLink
                                        to="#!"
                                        className="nav-link" style={{ fontSize: '18px' }}
                                        onClick={() => logout()}
                                    >
                                        Salir
                                    </NavLink>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
