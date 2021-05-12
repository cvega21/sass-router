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
        </Switch>

      </div>
    </Router>
  );
}

export default App;
