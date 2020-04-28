import React, { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { CartConsumer } from "./Homepage";
const CartPage = ({ nextStep }) => {
  const cart = useContext(CartConsumer);
  return (
    <div>
      <h2>Cart page</h2>
      <center>
        your Cart items will dispaly here and later proceed with payment gateway
      </center>
      <div style={{ display: "flex" }}>
        {cart.map((item, i) => (
          <div key={i}>
            <Card style={{ width: "10rem" }}>
              <ListGroup variant="flush">
                <Card.Img variant="top" src={item.url} width="40px" />
                <ListGroup.Item>
                  {item.title} {item.price} *{item.count}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
      {cart.length > 0 ? (
        <button type="button" onClick={nextStep}>
          checkout
        </button>
      ) : null}
    </div>
  );
};

export default CartPage;
