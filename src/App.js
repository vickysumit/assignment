import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from './components/Register';
import Speaker from './components/speaker';
import { Route,Switch, Redirect } from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <BrowserRouter>
      <div>
      <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/speaker" component={Speaker} />
          <Redirect to="/home" />
        </Switch>
      <Footer />
        
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
