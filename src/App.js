import { useState } from "react";
import logo from './logo.svg';
import './App.css';

const App = ({ practices }) => {
  return (
    <div className="App">
      <header className="App-header">
        <select className="App-select">
          {practices.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
      </header>
    </div>
  );
};

export default App;
