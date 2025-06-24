import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SendMessage from './pages/SendMessage';
import SearchMessages from './pages/SearchMessages';
import Home from './pages/Home';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '16px',
    padding: '16px 24px',
    borderBottom: '2px solid #eee',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const baseLinkStyle = {
    textDecoration: 'none',
    color: '#555',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 16px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
  };

  const activeLinkStyle = {
    color: '#fff',
    backgroundColor: '#007bff',
  };

  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (isActive, index) => {
    let style = { ...baseLinkStyle };
    if (isActive) style = { ...style, ...activeLinkStyle };
    if (hovered === index) style = { ...style, textDecoration: 'underline' };
    return style;
  };

  return (
    <Router>
      <nav style={navStyle}>
        {['Home', 'Send Message', 'Search Messages'].map((text, i) => {
          const paths = ['/', '/send', '/search'];
          return (
            <NavLink
              key={text}
              to={paths[i]}
              end={i === 0}
              style={({ isActive }) => getLinkStyle(isActive, i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {text}
            </NavLink>
          );
        })}
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
