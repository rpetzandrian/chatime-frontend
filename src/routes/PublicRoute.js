import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function PublicRoute({ component: Component, ...rest }) {
  const { isLogin } = useSelector((s) => s.Auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && rest.restricted ? <Redirect to="/chat" /> : <Component />
      }
    />
  );
}

export default PublicRoute;
