import { useState } from 'react'
import { NavBar } from '../ui/NavBar'

export const HomeScreen = () => {

  const [file, setFile] = useState(null);

  const sendFile = (e) => {
    e.preventDefault()
    
    const formData = new FormData();
    
    formData.append('file', file);

    
    fetch('http://localhost:4000/upload-image', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Se quita la previsualización de la imágen enviada
        setFile('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleInputChange = ({ target }) => {
    setFile(target.files[0]);
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Subida de imagenes</h1>
        <h2>Utilizando express-fileupload</h2>
        <hr />
        <div className="row">
          <div className="col">
            <form action="#" onSubmit={sendFile}>
              <input
                type="file"
                className='form-control'
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                Subir
              </button>
            </form>
            {/* Previsualización de imagen que se va a subir */}
            <div className="mt-3">
              <img
                src={file ? URL.createObjectURL(file) : ''}
                width={400}
                alt=""
              />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
