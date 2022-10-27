import { useState } from 'react'



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
        <div 
            className='container mx-auto d-flex justify-content-center align-items-center'
        >
            <form
                onSubmit={handleSubmit}
                className='mt-5 border p-4'
            >
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    name='username'
                    autoComplete='off'
                    className='form-control mb-3'
                    onChange={handleInputChange}
                    value={username}
                />

                <label htmlFor="password">Password:</label>
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
                    className='btn btn-primary mt-4'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}

