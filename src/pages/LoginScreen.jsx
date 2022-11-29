import { useContext, useState } from 'react';
import '../assets/LoginScreen.css';
import { AuthContext } from '../context/AuthContext';
import { type } from '../types/types';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {
    const navigate = useNavigate();

    const { user, dispatch } = useContext(AuthContext)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    // Se desestructuran los valores del state para vincularlos al value de los input
    const { username, password } = state;

    // Se capturan los datos ingresados en los inputs 
    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    };

    // Se envían al back-end los datos del formulario
    const handleSubmit = (e) => {
        e.preventDefault();


        (async () => {
            // Se modifican las opciones del fetch, añadiendo los datos del formulario
            options.body = JSON.stringify({ username, password })

            const resp = await fetch('http://localhost:4000/login', options)

            // Si el ok es false, significa que se produjo un error en la petición
            if (!resp.ok) {
                //alert('Revise las credenciales y vuelva a intentarlo');
                Swal.fire({
                    title: 'Error!',
                    text: 'Revise las credenciales y vuelva a intentarlo',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: 'red'
                })
            }

            const data = await resp.json()

            Swal.fire({
                text: 'Bienvenido!',
                icon: 'success',
                timer: '2000'

            })

            
            // Se envía la información del usuario al reducer
            dispatch({
                types: type.LOGIN,
                payload: data
            })
            
            const lastPath = localStorage.getItem('lastPath');
            
            // Se redirecciona al usuario a la última ruta visitada
            navigate(lastPath || '/', { replace: true });
        })()
    };


    return (
        <>
            <div className='row vh-100 login'>
                <div className="col-md-6 mx-auto align-self-center col-lg-4 col-sm-8 col-xs-12">
                    <form
                        onSubmit={handleSubmit}
                        className='border p-4 rounded bg-white shadow'
                    >
                        <p className='text-center bg-primary p-2 shadow text-white rounded'>
                            <span style={{ fontSize: '25px' }}>Iniciar sesión</span>
                        </p>
                        <div className="form-floating mb-3 mt-4">
                            <input
                                type='text'
                                name='username'
                                autoComplete='off'
                                className='form-control mb-3 hover-shadow'
                                onChange={handleInputChange}
                                value={username}
                                autoFocus={true}
                                id='username'
                                placeholder='usuario'
                            />
                            <label htmlFor='username'>Usuario</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type='password'
                                name='password'
                                autoComplete='off'
                                className='form-control hover-shadow'
                                onChange={handleInputChange}
                                value={password}
                                id='password'
                                placeholder='password'
                            />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <button
                            style={{ fontSize: '18px' }}
                            type='submit'
                            className='btn btn-primary mt-3 w-100 shadow '
                        >
                            Ingresar { JSON.stringify(user.logged, null, 3) } 
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

