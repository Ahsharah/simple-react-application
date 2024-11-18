import React from 'react';

function Content({ color = "black", text, backgroundColor = "white" }) {
  return (
    <div style={{
      padding: "2rem",
      margin: "1rem auto",
      maxWidth: "800px",
      backgroundColor: backgroundColor,
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease-in-out"
    }}>
      <p style={{ 
        color: color,
        fontSize: "1.1rem",
        lineHeight: "1.6",
        margin: 0
      }}>
        {text}
      </p>
    </div>
  );
}

export default Content;