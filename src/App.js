import React from 'react';
import { Link,  Route } from "wouter";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className='App-logo' alt='Giffy logo' src='/logo.png' />
        </Link>
        <Route 
          component={Home}
          path= "/"
        />
        <Route 
          component={SearchResults}
          path= "/search/keyword" />
        <Route 
        component={Detail}
        path= "/gif/:id"
      />
      </section>
    </div>
  )
}
