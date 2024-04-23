import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services/Services';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
