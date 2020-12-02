import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
