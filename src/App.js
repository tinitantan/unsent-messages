import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SendMessage from './pages/SendMessage';
import SearchMessages from './pages/SearchMessages';
import HomePage from './pages/HomePage';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '16px',
    padding: '16px 24px',
    borderBottom: '2px solid #eee',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#555',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 16px',
    borderRadius: '5px',
  };

  const activeLinkStyle = {
    color: '#fff',
    backgroundColor: '#007bff',
  };

  return (
    <Router>
      <nav style={navStyle}>
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/send"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Send Message
        </NavLink>
        <NavLink
          to="/search"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Search Messages
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendMessage />} />
        <Route path="/search" element={<SearchMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
