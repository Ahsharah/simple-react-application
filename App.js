import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  const contentItems = [
    { color: "#3498db", text: "This is my first React Application!", backgroundColor: "#ebf5fb" },
    { color: "#e74c3c", text: "Wish me luck...", backgroundColor: "#fdedec" },
    { color: "#27ae60", text: "I think I've got it!", backgroundColor: "#e9f7ef" }
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#ecf0f1",
      paddingBottom: "100px" // Space for fixed footer
    }}>
      <Header />
      <main style={{ padding: "2rem 1rem" }}>
        {contentItems.map((item, index) => (
          <Content 
            key={index}
            color={item.color}
            text={item.text}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;