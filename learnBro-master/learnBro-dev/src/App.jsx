import React from "react";
import Router from './Router'
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Router/>
      </div>
    </BrowserRouter>
  );
}