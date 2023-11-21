import React from "react";
import "./Index.scss";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
