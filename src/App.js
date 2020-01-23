import React from 'react';
// import './App.css';
import Vehicle from './Component/Vehicle';
import Book from './Component/Book';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
         <BrowserRouter>
            <Route exact path="/"  render={props => <Vehicle {...props}/>}/>
            <Route path="/Book/:id"  render={props => <Book {...props}/>}/>
         </BrowserRouter>
  );
}

export default App;
