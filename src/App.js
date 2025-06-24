import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SendMessage from './pages/SendMessage';
import SearchMessages from './pages/SearchMessages';
import Home from './pages/Home';
import './App.css'; // Add this line to import the CSS

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Home
        </NavLink>
        <NavLink to="/send" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Send Message
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Search Messages
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<SendMessage />} />
        <Route path="/search" element={<SearchMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
