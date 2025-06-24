import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SendMessage from "./pages/SendMessage";
import SearchMessages from "./pages/SearchMessages";
import Home from "./pages/Home";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: isMobile ? "12px" : "24px",
    padding: isMobile ? "8px 12px" : "9px 24px",
    borderBottom: "2px solid #eee",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const baseLinkStyle = {
    display: "inline-block", // inline-block lets padding + borderBottom align nicely
    textDecoration: "none",
    color: "#201e1c",
    fontWeight: "600",
    fontSize: isMobile ? "0.85rem" : "0.95rem",
    padding: isMobile ? "4px 8px" : "4px 12px",
    borderRadius: 0, // square edges
    textTransform: "uppercase",
    transition: "border-bottom-color 0.2s ease",
    borderBottom: "2px solid transparent",
  };

  const activeLinkStyle = {
    borderBottom: "2px solid #201e1c",
  };

  const hoverLinkStyle = {
    borderBottom: "2px solid #201e1c",
  };

  const getLinkStyle = (isActive, index) => {
    let style = { ...baseLinkStyle };
    if (isActive) style = { ...style, ...activeLinkStyle };
    else if (hovered === index) style = { ...style, ...hoverLinkStyle };
    return style;
  };

  // Labels switch for mobile
  const labels = isMobile
    ? ["Home", "Send", "Search"]
    : ["Home", "Send a Message", "Search the Archive"];

  const paths = ["/", "/send", "/search"];

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <nav style={navStyle}>
          {labels.map((text, i) => (
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
          ))}
        </nav>

        <main style={{ flex: 1, padding: isMobile ? "1rem" : "1rem 2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send" element={<SendMessage />} />
            <Route path="/search" element={<SearchMessages />} />
          </Routes>
        </main>

        <footer
          style={{
            marginTop: "0.5rem",
            marginBottom: "2rem",
            padding: 0,
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          Made with love {"<3"}
        </footer>
      </div>
    </Router>
  );
}

export default App;
