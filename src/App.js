import React from "react";

function Food({ name, source }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>that is from {source}</h3>
    </div>
  );
}

const foodILike = [
  { name: "Kimchi", source: "spice" },
  { name: "dongass", source: "fried" },
  { name: "bulgogi", source: "fire" },
  { name: "chicken", source: "fried" },
  { name: "rice", source: "rice" },
];

function App() {
  return (
    <div>
      <h1>Hello~</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} source={dish.source} />
      ))}
    </div>
  );
}

export default App;
