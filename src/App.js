import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Tabs from './components/Tabs';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <div>
      <Router>
        <Tabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
