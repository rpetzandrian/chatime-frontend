import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/main.css";
import {
  Splash,
  Login,
  Register,
  Forgot,
  Chatlist,
  Message,
  Call,
} from "./pages";

function App() {
  return (
    <Router>
      {/* Splash Screen */}
      <Route path="/" exact component={Splash} />

      {/* Authentication Pages */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot" component={Forgot} />

      {/* Main Pages */}
      <Route path="/chatlist" component={Chatlist} />
    </Router>
  );
}

export default App;
