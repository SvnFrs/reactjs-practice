import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Media,
} from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    // <Card onClick={() => onClick(dish.id)}>
    <Card>
      <CardImgOverlay>
        <CardTitle>
          <h3 className="fw-bold">{dish.name}</h3>
        </CardTitle>
      </CardImgOverlay>
      <CardImg width={"100%"} src={dish.image} alt={dish.name} />
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
