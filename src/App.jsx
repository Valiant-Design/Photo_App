// import { useState } from 'react';
import React, { Component } from 'react';
import Search from "./Components/search/Search";
import Header from './Components/Header/Header';
import './App.css';



class App extends Component{
  render(){
    return(
      
      <>
        <Header />
        <Search />
      </>
      
    )
  }
}


export default App;
