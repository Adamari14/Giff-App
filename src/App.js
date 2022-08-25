import React from 'react';
import {  Route } from "wouter";
import './App.css';
import ListOfGifs from './components/ListOfGifs'; 

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/panda'>Gifs de pandas</a>
        <a href='/gif/ecuador'>Gifs de Ecuador</a>
        <a href='/gif/chile'>Gifs de Chile</a>
        <Route 
          path='/gif/:keyword' 
          component={ListOfGifs }
        />
      </section>
    </div>
  )
}
