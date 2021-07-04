import { useState } from 'react';

function RickMortyFn(){

  const [personajes, setPersonajes] = useState([]);

  return(
    <div>
      <h2>Soy el componente Morty FUNCTION</h2>
      <ul>
        {personajes.length === 0 && <p>Cargando</p>}
        {
          personajes.map((personaje,i) => {
            return(
              <li key={i}>
                <h3>{personaje.name}</h3>
                <img src={personaje.image} alt="avatar" width="150px"/>
              </li>
            )
          })
        }
        {/* <button onClick={this.cargarMas}>Siguiente Pagina</button> */}
      </ul>
    </div>
  )
  

}

export default RickMortyFn;