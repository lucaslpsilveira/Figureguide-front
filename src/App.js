import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';
import { isAuthenticated } from "./services/auth";

const loading = () => <div className="animated fadeIn pt-3 text-center"></div>;

//Containers
const Home =  Loadable({
    loader: () => import('./containers/DefaultLayout'),
    loading
});

// Pages
const SignIn = Loadable({
    loader: () => import('./pages/SignIn'),
    loading
});

const SignUp = Loadable({
    loader: () => import('./pages/SignUp'),
    loading
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signIn" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/app" component={() => <h1>App</h1>} />
                    <Route path="*" component={() => <h1>Page not found</h1>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
