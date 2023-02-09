import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({ singleProduct }) => {
    const { _id, title, price, description, img } = singleProduct;
    return (
        <Col className="my-3 text-center" sm={12} md={6} lg={4}>
        <Card style={{ height: "105%" }} className="shadow">
          <div className="text-center">
            <Card.Img
              style={{ width: "95%", height: "90%" }}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title style={{ color: "#42a5f5" }} className="text-uppercase">
              {title}
            </Card.Title>
            <Card.Title>Price: {price}.00 $</Card.Title>
            <Card.Text>{description.slice(0,50)}...</Card.Text>
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn btn-warning text-white">Buy Now <i class="fas fa-angle-double-right"></i></button>
                    </Link>
          </Card.Body>
        </Card>
    </Col>
    );
};

export default SingleProduct;