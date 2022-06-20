import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Views/Home';
import Test from './Views/Test';

function App() {
  return (
    <div>
      <Router>

        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/test" element={ <Test/> } />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
