import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'

function App() {
  return (
   <BrowserRouter>
    {/* <NavBar/> */}
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="#about" component={About}/>
    
     <Route exact path="/portfolio" component={Portfolio}/>
   </Switch>

   </BrowserRouter>
  );
}

export default App;
