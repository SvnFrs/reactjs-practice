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
import DishDetail from "./DiskdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    }
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width={"25%"} src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle><h3 className="fw-bold">{dish.name}</h3></CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <DishDetail selectedDish={this.state.selectedDish}/>
      </div>
    );
  }
}

export default Menu;
