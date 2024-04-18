import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar/navbar";
import Body from "./body/body";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;