import { useState, useEffect } from 'react';

function RickMortyFn(){

  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);

  //Haciendo el fetch (montando el componente, equivalente al componentDidMount)
  useEffect(()=>{
    console.log('%cse montó el componente', 'color: green');
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      setPersonajes(data.results)
    })
    .catch(error => console.log(error));
  },[])

  //Indicando que este pendiente del estado personajes y si sucede algo muestre lo que se define en el callback, equivalente al componentDidUpdate
  useEffect(()=> {
    console.log('%cse actualizó el componente', 'color: yellow');
  }, [personajes])


  //Para desmontar debo retornar una funcion, equivalente al componentWillUnmount
  useEffect(()=>{
    return () => console.log('%cse desmontó el componente', 'color: red');
  },[])

  //cargarMas ahora va a ser una funcion y no un metodo como en la Clase
  const cargarMas = async () => {
    await setPagina(pagina + 1);
    console.log(pagina);
    console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`);

    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    .then(response => response.json())
    .then(data => {
      setPersonajes(data.results);
    })
    .catch(error => console.error(error));
  }

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
        <button onClick={cargarMas}>Siguiente Pagina</button>
      </ul>
    </div>
  )
  

}

export default RickMortyFn;