import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

/*
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import Counters from "./components/Counters";
import Navbar from "./components/navbar";
import Quotes from "./components/Quotes";
import ReactMarkdownPreviewer from "./components/ReactMarkdownPreviewer";
import DrumMachine from "./components/DrumMachine";
import store from "./store";
*/

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>

        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;

/*
  <Provider store={store}>
  <div className="App">

    
    <main className="container">
       
                <PostForm />
      <hr />
      <br />
      <Counters />
      <hr />
      <br />
      <Posts />
      <DrumMachine />
      
    </main>
    
  </div>
  
</Provider>
*/
