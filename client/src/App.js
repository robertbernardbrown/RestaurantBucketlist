import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App = () => (
      <Router>
        <div className="app">
          <Header/>
          <Wrapper>
            <Route path="/" component={Home} />
            <Route path="/" component={Saved} />
            <Route exact path="/saved/:id" component={Saved} />
          </Wrapper>
          <Footer/>
        </div>
      </Router>
)

export default App;
