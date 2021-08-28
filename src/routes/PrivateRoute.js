import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLogin } = useSelector((s) => s.Auth);
  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
