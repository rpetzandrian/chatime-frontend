import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Splash, Login, Register, Forgot, Chat } from "./pages";
import { PrivateRoute, PublicRoute } from "./routes";
// import { Login as login } from "./redux/actions/auth";

function App() {
  // const dispatch = useDispatch();
  // const { data: auth } = useSelector((s) => s.Auth);
  // const { data: form } = useSelector((s) => s.exp);

  // useEffect(() => {
  //   // if (auth.isLogin) {
  //   //   setTimeout(() => {
  //   //     dispatch(login(form));
  //   //   }, auth.expired);
  //   // }
  //   console.log("1");
  // }, [auth.token]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
        <PublicRoute
          path="/login"
          exact={true}
          restricted={true}
          component={() => <Login />}
        />
        <PublicRoute
          path="/register"
          exact={true}
          restricted={true}
          component={() => <Register />}
        />
        <PublicRoute
          path="/forgot"
          exact={true}
          restricted={true}
          component={() => <Forgot />}
        />
        <PrivateRoute path="/chat" exact={true} component={() => <Chat />} />
        <PrivateRoute
          path="/chat/:slug"
          exact={true}
          component={() => <Chat />}
        />
        <PrivateRoute path="/contact" exact={true} component={() => <Chat />} />
        <PrivateRoute path="/setting" exact={true} component={() => <Chat />} />
      </Switch>
    </Router>
  );
}

export default App;
