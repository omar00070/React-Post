import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { PostProvider } from "./context/PostContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Router>
          <div className="page">
            <div className="top">
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile/" component={Profile} />
              </Switch>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </PostProvider>
    </div>
  );
}

export default App;
