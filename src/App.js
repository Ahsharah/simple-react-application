import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import './App.css';

function App() {
  const contentItems = [
    { color: "#3498db", text: "This is my first React Application!", backgroundColor: "#ebf5fb" },
    { color: "#e74c3c", text: "Wish me luck...", backgroundColor: "#fdedec" },
    { color: "#27ae60", text: "I think I've got it!", backgroundColor: "#e9f7ef" }
  ];

  const recipes = [
    {
      name: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Pecorino Romano", "Pancetta", "Black Pepper"]
    },
    {
      name: "Classic Burger",
      ingredients: ["Beef Patty", "Burger Bun", "Lettuce", "Tomato", "Onion", "Cheese"]
    },
    {
      name: "Caesar Salad",
      ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing", "Black Pepper"]
    }
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#ecf0f1",
      paddingBottom: "100px"
    }}>
      <Header />
      <main style={{ padding: "2rem 1rem" }}>
        <section>
          {contentItems.map((item, index) => (
            <Content 
              key={index}
              color={item.color}
              text={item.text}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </section>
        
        <section style={{ maxWidth: "800px", margin: "2rem auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            color: "#2c3e50", 
            marginBottom: "2rem"
          }}>
            Our Recipes
          </h2>
          {recipes.map((recipe, index) => (
            <Recipe 
              key={index}
              name={recipe.name}
              ingredients={recipe.ingredients}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;