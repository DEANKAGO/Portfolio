import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services/Services';
import { Skills } from './pages/Skills/Skills';
import { About } from './pages/About/About';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
