import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import style from "./Homepage.module.css";
import CartPage from "./Cart";

const CartContext = React.createContext();
const Homepage = () => {
  const fetched = [
    {
      albumId: 1,
      id: 1,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 7,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 8,
      price: "10$",
      inCart: false,
      count: 1,
      total: 0,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
  ];

  const [data, setdata] = useState(fetched);
  const [cart, setcart] = useState([]);
 // console.log(data);
  // useEffect(() => {
  //   const dataApi = async () => {
  //     try {
  //       let response = await axios.get("/home");
  //       console.log(response.data);
  //       setdata(response.data)
  //        } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   dataApi();
  // }, [data]);
 // console.log(cart);
  const addToCart = (item) => {
    console.log(item);

    setcart([...cart, item]);
  };
  return (
    <div xs={12} md={3} className={style.maincontainer}>
      <div>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  <i className="fas fa-cart-plus"></i>
                </Button>
              </Card.Body>
            </Card>
          </React.Fragment>
        ))}
      </div>
      <div>
        <CartContext.Provider value={cart}>
          <CartPage/>
        </CartContext.Provider>
      </div>
    </div>
  );
};
const CartConsumer = CartContext;
export { CartConsumer };
export default Homepage;
