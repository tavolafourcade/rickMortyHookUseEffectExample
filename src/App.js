import { Link, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
// import RickMortyClass from './components/RickMortyClass';
// import RickMortyFn from './components/RickMortyFn';


function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <Link to="/rick-morty">RickMortyClass</Link> */}
      {/* <Link to="/srcRickMortyFn">RickMortyFn</Link> */}
      <hr/>
      <Route exact path="/" component={Home}/>
      {/* <Route path='/rickMortyclass' component={RickMortyClass}/> */}
      {/* <Route exact path='/rickmortyfn' component={RickMortyFn}/> */}
      
      
    </div>
  );
}

export default App;
