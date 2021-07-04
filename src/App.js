import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RickMortyClass from './components/RickMortyClass';
import RickMortyFn from './components/RickMortyFn';


function App() {
  return (
    <div>
      <Link to="Home">Home</Link>
      <Link to="RickMortyClass">RickMortyClass</Link>
      <Link to="RickMortyFn">RickMortyFn</Link>
      <hr/>

      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rickmortyclass' component={RickMortyClass}></Route>
      <Route exact path='/rickmortyfn' component={RickMortyFn}></Route>
    </div>
  );
}

export default App;
