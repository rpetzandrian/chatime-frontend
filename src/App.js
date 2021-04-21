import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Splash, Login, Register, Forgot, Chat } from "./pages";
import { PrivateRoute, PublicRoute } from "./routes";

function App() {
  // const history = useHistory();
  // const [userToken, setUserToken] = useState(null);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   async function getToken() {
  //     const userToken = await localStorage.getItem("token");
  //     setUserToken(userToken);
  //     const userId = await localStorage.getItem("userID");
  //     setUserId(userId);
  //   }
  //   getToken();
  // }, [userToken]);

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
      </Switch>
    </Router>
  );

  // if (!userToken) {
  //   return (
  //     <Router>
  //       <Switch>
  //         {/* Splash Screen */}
  //         <Route path="/" exact>
  //           <Splash />
  //         </Route>

  //         {/* Authentication Pages */}
  //         <Route path="/login">
  //           <Login setUserToken={setUserToken} setUserId={setUserId} />
  //         </Route>
  //         <Route path="/register">
  //           <Register setUserToken={setUserToken} setUserId={setUserId} />
  //         </Route>
  //         <Route path="/forgot">
  //           <Forgot />
  //         </Route>

  //         {/* <Route path="/chat">
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: { referrer: "/login" },
  //             }}
  //           />
  //         </Route> */}
  //       </Switch>
  //     </Router>
  //   );
  // } else {
  //   return (
  //     <Router>
  //       <Switch>
  //         {/* Splash Screen */}
  //         <Route path="/" exact>
  //           <Splash />
  //         </Route>

  //         {/* Main Pages */}
  //         <Route path="/chat/:slug" exact>
  //           <Chat userToken={userToken} />
  //         </Route>
  //         <Route path="/chat" exact>
  //           <Chat userToken={userToken} />
  //         </Route>
  //         <Route path="/call-history" exact>
  //           <Chat userToken={userToken} />
  //         </Route>
  //         <Route path="/contact" exact>
  //           <Chat userToken={userToken} />
  //         </Route>
  //         <Route path="/chat/:slug/contact_info" exact>
  //           <Chat userToken={userToken} />
  //         </Route>

  //         <Route path="/login">
  //           <Redirect
  //             to={{
  //               pathname: "/chat",
  //               state: { referrer: "/chat" },
  //             }}
  //           />
  //         </Route>
  //         <Route path="/register">
  //           <Redirect
  //             to={{
  //               pathname: "/chat",
  //               state: { referrer: "/chat" },
  //             }}
  //           />
  //         </Route>
  //         <Route path="/forgot">
  //           <Redirect
  //             to={{
  //               pathname: "/chat",
  //               state: { referrer: "/chat" },
  //             }}
  //           />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   );
  // }
}

export default App;
