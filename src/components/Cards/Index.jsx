import React from "react";
import Card from "../Card/Index";
import "./Index.scss";
const Cards = () => {
  return (
    <div className="cards">
      <Card
        title="Img1"
        desc="Tony Montana"
        img="https://images.unsplash.com/photo-1700551953552-c1fdd79215aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Card>
      <Card title="Img2" desc="Vito Corleone" img="https://images.unsplash.com/photo-1700254783347-7b91d9bfad89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"></Card>
      <Card title="Img3" desc="Michael Corleone" img="https://images.unsplash.com/photo-1700495723803-f7a005efe2a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"></Card>
    </div>
  );
};

export default Cards;
