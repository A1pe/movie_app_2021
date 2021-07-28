import React from "react";

// component area

function Food({ name, source }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>that is from {source}</h3>
    </div>
  );
}

// supported component area - map

const foodILike = [
  { id: 1, name: "Kimchi", source: "spice" },
  { id: 2, name: "dongass", source: "fried" },
  { id: 3, name: "bulgogi", source: "fire" },
  { id: 4, name: "chicken", source: "fried" },
  { id: 5, name: "rice", source: "rice" },
];

// main app area

function App() {
  return (
    <div>
      <h1>Hello~</h1>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} source={dish.source} />
      ))}
    </div>
  );
}

export default App;
