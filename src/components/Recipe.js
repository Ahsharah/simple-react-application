import React from 'react';

function Recipe({ name, ingredients }) {
  return (
    <div style={{
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "1rem" }}>{name}</h2>
      <ul style={{ listStylePosition: "inside" }}>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;