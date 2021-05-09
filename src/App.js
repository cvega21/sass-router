import './App.scss';
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
        {/* <button>
          night mode
        </button>   */}
        
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
