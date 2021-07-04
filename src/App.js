import { Link, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import RickMortyClass from './components/RickMortyClass';
import RickMortyFn from './components/RickMortyFn';


function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/rick-morty-class">RickMortyClass</Link>
      <br/>
      <Link to="/rick-morty-fn">RickMortyFn</Link>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path='/rick-morty-class' component={RickMortyClass}/>
      <Route exact path='/rick-morty-fn' component={RickMortyFn}/>
      
      
    </div>
  );
}

export default App;
