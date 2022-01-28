import React from "react";

// router
import { Route, Redirect } from "react-router-dom";

// helpers
import { isAuthenticated } from "../Helpers/authHelper";

// Private Route
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
