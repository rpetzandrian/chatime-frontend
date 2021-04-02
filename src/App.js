import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Splash, Login, Register, Forgot, Chat } from "./pages";

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
      <Route path="/chat" exact component={Chat} />
      <Route path="/chat/:id" component={Chat} />
    </Router>
  );
}

export default App;
