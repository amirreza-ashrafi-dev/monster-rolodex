import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.name}?set=set2&?size=200x200`}
        alt="monster"
      />
      <h1>{props.monster.name}</h1>
    </div>
  );
}

export default Card;
