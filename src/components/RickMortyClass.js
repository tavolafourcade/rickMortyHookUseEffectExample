import React, { Component } from 'react';

class RickMortyClass extends Component {
  constructor(){
    super();
    //Estado inicial compuesto de dos propiedades: personajes, pagina
    this.state = {
      personajes: [],
      pagina: 1
    }
  }

  componentDidMount(){
    console.log('%cse montó el componente', 'color: green');
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({
        personajes: data.results
      })
    })
    .catch(error => console.log(error));
  }

  componentDidUpdate(){
    console.log('%cse actualizó el componente', 'color: yellow');
  }

  componentWillUnmount(){
    console.log('%cse desmontó el componente', 'color: red');
  }


  cargarMas = async () => {
    await this.setState({pagina: this.state.pagina + 1});
    console.log(this.state.pagina);
    console.log(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`);

    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        personajes: data.results
      })
    })
    .catch(error => console.error(error));
  }

  render(){
    return(
      <div>
        <h2>Soy el componente Morty CLASS</h2>
        <ul>
          {this.state.personajes.length === 0 && <p>Cargando</p>}
          {
            this.state.personajes.map((personaje,i) => {
              return(
                <li key={i}>
                  <h3>{personaje.name}</h3>
                  <img src={personaje.image} alt="avatar" width="150px"/>
                </li>
              )
            })
          }
          <button onClick={this.cargarMas}>Siguiente Pagina</button>
        </ul>
      </div>
    )
  }

}

export default RickMortyClass;