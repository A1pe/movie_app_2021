import React from "react";
import PropTypes from "prop-types";

// component area

function Food({ name, source, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>that is from {source}</h3>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

// supported component area - map

const foodILike = [
  { id: 1, name: "Kimchi", source: "spice", rating: 5 },
  { id: 2, name: "dongass", source: "fried", rating: 3 },
  { id: 3, name: "bulgogi", source: "fire", rating: 4 },
  { id: 4, name: "chicken", source: "fried", rating: 5 },
  { id: 5, name: "rice", source: "rice", rating: 4 },
];
Food.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// main app area

function App() {
  return (
    <div>
      <h1>Hello~</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          source={dish.source}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
