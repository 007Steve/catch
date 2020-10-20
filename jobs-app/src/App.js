import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import MainContainer from './components/MainContainer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
     <MainContainer/>
    </div>
  );
}

export default App;
