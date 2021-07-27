import React from "react";

function Food({ fav }) {
  return <h1>I like { fav }</h1>
}

function App() {
  return (
    <div>
      <h1>Hello~</h1>
      <Food fav="Chicken"/>
      <Food fav="Ramen"/>
      <Food fav="Rice"/>
      <Food fav="Bulgogi"/>
      <Food fav="kimchi"/>
    </div>
  );
}

export default App;
