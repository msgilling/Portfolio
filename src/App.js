import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
