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
            <li className="LinkButton">
              <Link to="/reactapp">
                <button>React</button>
              </Link>
            </li>
            <li className="LinkButton">
              <Link to="/sass">
                <button>Sass</button>
              </Link>
            </li>
            <li className="LinkButton">
              <Link to="/node">
                <button>Node</button>
              </Link>
            </li>
          </ul>
        </nav>      
        <button>
          night mode
        </button>  
        
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
