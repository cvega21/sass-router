import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactApp from './components/ReactApp';
import Sass from './components/Sass';
import Node from './components/Node';
import LogosBanner from './components/LogosBannerNew';
import Grid from './components/Grid';

const App = () => {
  const changeTheme = e => {
    document.body.classList.toggle("DarkTheme");
  }
  
  return (
    <Router>
      <div className="App">
        <nav className="NavBar">
          <ul className="LinkContainer">
            <li className="LinkButtonContainer">
              <Link to="/reactapp">
                <button className="LinkButton">React</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/sass">
                <button className="LinkButton">Sass</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/node">
                <button className="LinkButton">Node</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/logos">
                <button className="LinkButton">Logos</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/grid">
                <button className="LinkButton">Grid</button>
              </Link>
            </li>
          </ul>
        </nav>      
        <label class="switch">
          <input type="checkbox" onClick={changeTheme}/>
          <span class="slider round"></span>
        </label>  
        
        <Switch>
          <Route path="/reactapp">
            <ReactApp/>
          </Route>
          <Route path="/sass">
            <Sass/>
          </Route>
          <Route path="/node">
            <Node/>
          </Route>
          <Route path="/logos">
            <LogosBanner/>
          </Route>
          <Route path="/grid">
            <Grid/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
