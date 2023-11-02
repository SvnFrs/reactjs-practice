import { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Media,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardHeader>
            <h3 className="fw-bold">{dish.name}</h3>
          </CardHeader>
          <CardImg width={"25%"} top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardHeader>
            <h3 className="fw-bold">Comments</h3>
          </CardHeader>
          <CardBody>
            {dish.comments.map((comment) => {
              return (
                <div key={comment.id} className="list-unstyled">
                  <Media tag="li">
                    <Media body>
                      <p>{comment.comment}</p>
                      <p>
                        -- {comment.author} ,{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                      </p>
                    </Media>
                  </Media>
                </div>
              );
            })}
          </CardBody>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
