import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Navbar />
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/music' element={< Music />}></Route>
                 <Route exact path='/gallery' element={< Gallery />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
          </Routes>
          <Footer />
          </div>
       </Router>
   );
  }
}

export default App;
