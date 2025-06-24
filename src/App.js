import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SendMessage from './pages/SendMessage';
import SearchMessages from './pages/SearchMessages';
import Home from './pages/Home';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '16px',
    padding: '9px 24px',          // reduced vertical padding
    borderBottom: '2px solid #eee',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const baseLinkStyle = {
    textDecoration: 'none',
    color: '#201e1c',
    fontWeight: '600',
    fontSize: '0.95rem',           // smaller font size
    padding: '4px 12px',          // less padding for smaller height
    borderRadius: 0,              // no rounding on edges
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    borderBottom: '2px solid transparent',
  };

  const hoverLinkStyle = {
    borderBottom: '1px solid #201e1c', // flat underline on hover
  };

  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (isActive, index) => {
    // No active style at all as per request
    let style = { ...baseLinkStyle };
    if (hovered === index) style = { ...style, ...hoverLinkStyle };
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
