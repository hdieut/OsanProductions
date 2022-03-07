import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Music from './components/pages/Music';
import Gallery from './components/pages/Gallery';
import Social from './components/pages/Social';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            {/* <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/social">Social</Link>
              </li>
            </ul> */}
            <Navbar />
           <Routes>
                 <Route exact path='/' element={< About />}></Route>
                 <Route exact path='/music' element={< Music />}></Route>
                 <Route exact path='/gallery' element={< Gallery />}></Route>
                 <Route exact path='/social' element={< Social />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;
