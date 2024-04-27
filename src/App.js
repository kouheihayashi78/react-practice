import { useState } from "react";
import './App.css';

const App = ({ practices }) => {
  const [practiceIndex, setPracticeIndex] = useState(0);

  const contentChange = (e) => {
    setPracticeIndex(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <select className="App-select" value={practiceIndex} onChange={contentChange}>
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
