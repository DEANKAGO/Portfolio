import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services/Services';
import { Skills } from './pages/Skills/Skills';
import { About } from './pages/About/About';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div id='bg_container'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about/:id' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
