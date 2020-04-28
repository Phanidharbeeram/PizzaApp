import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changetrack = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    //console.log(this.state);
  };
  registerUser = (e) => {
    e.preventDefault();
    console.log(this.state);
    let newUser = this.state;
    if (this.state.confirmpassword === this.state.password) {
      axios
        .post("http://localhost:8000/register", newUser)
        .then((res) => console.log(res));
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <h1>Registeration Page</h1> <br />
        <span>Create your own account it's Free and takes only a minute</span>
        <Form onSubmit={this.registerUser}>
          <Form.Group controlId="formBasicfirstname">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              name="firstname"
              type="text"
              placeholder="Enter your firstname"
              onChange={this.changetrack}
            />
          </Form.Group>
          <Form.Group controlId="formBasiclastname">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              name="lastname"
              type="text"
              placeholder="Enter your lastname"
              onChange={this.changetrack}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.changetrack}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.changetrack}
            />
          </Form.Group>
          <Form.Group controlId="formBasiccPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              onChange={this.changetrack}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterPage;
