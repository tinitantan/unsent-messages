import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SendMessage from './pages/SendMessage';
import SearchMessages from './pages/SearchMessages';
import Home from './pages/Home';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    padding: '9px 24px',
    borderBottom: '2px solid #eee',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const baseLinkStyle = {
    display: 'inline',
    textDecoration: 'none',
    color: '#201e1c',
    fontWeight: '600',
    fontSize: '0.95rem',
    padding: '4px 12px',
    borderRadius: 0,
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    borderBottom: '2px solid transparent',
  };

  const hoverLinkStyle = {
    borderBottom: '1px solid #201e1c',
  };

  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (isActive, index) => {
    let style = { ...baseLinkStyle };
    if (hovered === index) style = { ...style, ...hoverLinkStyle };
    return style;
  };

  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // full viewport height
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <nav style={navStyle}>
          {['Home', 'Send a Message', 'Search the Archive'].map((text, i) => {
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

        {/* Main content grows to fill space */}
        <main style={{ flex: 1, padding: '1rem 2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send" element={<SendMessage />} />
            <Route path="/search" element={<SearchMessages />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <footer
          style={{
            marginTop: '0.5rem',
            marginBottom: '2rem',
            padding: '0',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#666',
          }}
        >
          Made with love {'<3'}
        </footer>
      </div>
    </Router>
  );
}

export default App;
