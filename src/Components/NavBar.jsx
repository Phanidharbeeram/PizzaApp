import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBAr.modulee.css";
export default class NavBar extends Component {
  render() {
    return (
      <div className={styles.red}>
        <Navbar bg="dark" variant="light">
          <Navbar.Brand>NavBar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/Home">Home</Link>

            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
