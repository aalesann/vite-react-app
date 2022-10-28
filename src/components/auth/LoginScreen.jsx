import { useState } from 'react';
import '../../assets/LoginScreen.css';



export const LoginScreen = () => {

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
            if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');

            const data = await resp.json()
            console.log(data);

            // Aquí se debe redireccionar a vista principal (home) - requiere react-router-dom (recomendable v6)


        })()
    };


    return (
        <div className='row vh-100'>
            <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
            <form
                onSubmit={handleSubmit}
                className='border p-4 rounded bg-white'
            >
                <p className='text-center bg-primary p-2 text-white rounded'>
                    Iniciar sesión
                </p>
                <label htmlFor='username'>usuario:</label>
                <input
                    type='text'
                    name='username'
                    autoComplete='off'
                    className='form-control mb-3'
                    onChange={handleInputChange}
                    value={username}
                    autoFocus={true}
                />

                <label htmlFor="password">contraseña:</label>
                <input
                    type='password'
                    name='password'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                    value={password}
                />

                <button
                    type='submit'
                    className='btn btn-sm btn-primary mt-4'
                >
                    Ingresar
                </button>
            </form>
            </div>
        </div>
    )
}

