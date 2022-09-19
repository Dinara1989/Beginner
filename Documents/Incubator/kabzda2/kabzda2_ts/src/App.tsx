import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Raiting from "./components/Raiting/Raiting";
import AppTitle from "./AppTitle";


function App() {
  return (
    <div className="App">
        <AppTitle title={"Learning React"}/>
        <Raiting value={3}/>
        <Accordion />
        <Raiting value={2}/>
    </div>
  );
}

export default App;
