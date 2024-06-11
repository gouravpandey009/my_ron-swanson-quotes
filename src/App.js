// App.js

import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import QuoteTable from "./components/quote_container";

class App extends Component {
  render() {
    return (
      <div className="App ui grid center aligned container">
        <Title />
        <QuoteTable />
      </div>
    );
  }
}

export default App;
