import React from 'react';

function Header() {
  return (
    <header style={{
      padding: "1.5rem",
      backgroundColor: "#2c3e50",
      color: "white",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem" }}>
          Simple React Application
        </h1>
        <nav>
          <ul style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0
          }}>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;