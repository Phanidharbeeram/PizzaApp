import React, { Component } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CartPage from "./Cart";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage.jsx";

import ProtectedRoute from "./LoginPage";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loggedIn: true,
    };
  }
  // componentDidMount() {
  //   const dataApi = async () => {
  //     try {
  //       let response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/photos"
  //       );
  //       console.log(response.data);
  //       this.setState({ data: response.data });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   dataApi();
  // }
  render() {
    // AuthApi = React.createContext();

    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //        true ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to="/login" />
    //       )
    //     }
    //   />
    // );
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //       Auth.getAuth() === true ? (
    //         <Component {...props} {...rest} />
    //       ) : (
    //         <Redirect to="/login" />
    //       )
    //     }
    //   />
    // );

    return (
      <div>
        {/* <AuthApi.Provider value={this.state.auth}> */}
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/Home" component={Homepage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <ProtectedRoute
              path="/cart"
              loggedIn={this.state.loggedIn}
              component={CartPage}
            />
          </Switch>
        </Router>
        {/* </AuthApi.Provider>{" "} */}
      </div>
    );
  }
}
