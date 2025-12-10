import React from "react";

function Card({ props }) {
  return (
    <div className="shopping-item">
      <h3>{props.title}</h3>
      <img src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" alt="image" />
      <div className="description">
        <span>{props.stock}</span>
        <span>{props.points}</span>
      </div>
      <div className="badges">
        <span className="badge-1">{props.badge1}</span>
        <span className="badge-2">{props.badge2}</span>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Card;