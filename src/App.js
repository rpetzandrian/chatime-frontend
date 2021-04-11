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

function App() {
  const history = useHistory();
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function getToken() {
      const userToken = await localStorage.getItem("token");
      setUserToken(userToken);
      const userId = await localStorage.getItem("userID");
      setUserId(userId);
    }
    getToken();
  }, [userToken]);

  // return (
  //   <Router>
  //     <Switch>
  //       {/* Splash Screen */}
  //       <Route path="/" exact>
  //         // <Splash />
  //       </Route>

  //       {/* Authentication Pages */}
  //       <Route path="/login">
  //         <Login setUserToken={setUserToken} setUserId={setUserId} />
  //       </Route>
  //       <Route path="/register">
  //         <Register setUserToken={setUserToken} setUserId={setUserId} />
  //       </Route>
  //       <Route path="/forgot">
  //         <Forgot />
  //       </Route>

  //       {/* Main Pages */}
  //       <Route path="/chat" exact>
  //         <Chat userToken={userToken} />
  //       </Route>
  //       <Route path="/chat/call-history" exact>
  //         <Chat userToken={userToken} />
  //       </Route>
  //       <Route path="/chat/:slug" exact>
  //         <Chat userToken={userToken} />
  //       </Route>
  //       <Route path="/chat/:slug/contact_info" exact>
  //         <Chat userToken={userToken} />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );

  if (!userToken) {
    return (
      <Router>
        <Switch>
          {/* Splash Screen */}
          <Route path="/" exact>
            <Splash />
          </Route>

          {/* Authentication Pages */}
          <Route path="/login">
            <Login setUserToken={setUserToken} setUserId={setUserId} />
          </Route>
          <Route path="/register">
            <Register setUserToken={setUserToken} setUserId={setUserId} />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>

          {/* <Route path="*">
            <Redirect push to="/login" />
          </Route> */}
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          {/* Splash Screen */}
          <Route path="/" exact>
            <Splash />
          </Route>

          {/* Main Pages */}
          <Route path="/chat" exact>
            <Chat userToken={userToken} />
          </Route>
          <Route path="/chat/call-history" exact>
            <Chat userToken={userToken} />
          </Route>
          <Route path="/chat/:slug" exact>
            <Chat userToken={userToken} />
          </Route>
          <Route path="/chat/:slug/contact_info" exact>
            <Chat userToken={userToken} />
          </Route>

          <Route path="/login">
            <Redirect
              to={{
                pathname: "/chat",
                state: { referrer: "/chat" },
              }}
            />
          </Route>
          <Route path="/register">
            <Redirect
              to={{
                pathname: "/chat",
                state: { referrer: "/chat" },
              }}
            />
          </Route>
          <Route path="/forgot">
            <Redirect
              to={{
                pathname: "/chat",
                state: { referrer: "/chat" },
              }}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
