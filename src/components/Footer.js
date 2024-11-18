import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{
      padding: "1.5rem",
      backgroundColor: "#2c3e50",
      color: "white",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      width: "100%",
      boxShadow: "0 -2px 4px rgba(0,0,0,0.1)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <p style={{ margin: 0 }}>Created by Me, of course.</p>
        <p style={{ margin: 0 }}>&copy; {year} Simple React App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;