import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Front from './Components/Frontpage'
import About from './Components/About';
import Dasboard from './Components/Dasboard';
import Login from './Components/Login';
import Create from './Components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/'>
              <Front />
            </Route>
            <Route exact path='/about-us'>
              <About />
            </Route>
            <Route exact path='/dashboard'>
              <Dasboard />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
