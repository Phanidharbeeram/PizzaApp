import React, { useState } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
export const ProtectedRoute = ({
  component: Component,
  path,
  loggedIn,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};
export default function LoginPage() {
  // const [userLoggedIn, setuserLoggedIn] = useState(false);

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const newlogin = login;
    console.log(newlogin);
    await axios
      .post("/login", newlogin, { timeout: 10000 })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const changetrack = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <span>Please loin Here</span>
      <Form onSubmit={loginUser}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={changetrack}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={changetrack}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
