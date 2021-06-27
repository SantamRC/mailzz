import './App.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Dasboard from './Components/Dasboard';
import Login from './Components/Login';
import Create from './Components/Create';
import History from './Components/History';
import Scheduled from './Components/Scheduled';
import Signup from './Components/Signup';

function App() {

  const [page,setPage]=useState('home')

  return (
    <div className="App">
      <h2 className='d-none'>{page}</h2>
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/about-us'>
              <About />
            </Route>
            <Route exact path='/dashboard'>
              <Dasboard />
            </Route>
            <Route exact path='/login'>
              <Login change={setPage} />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route exact path='/history'>
              <History />
            </Route>
            <Route exact path='/scheduled'>
              <Scheduled />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            
        </Switch>
      </Router>

    </div>
  );
}

export default App;
