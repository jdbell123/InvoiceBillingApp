import './App.css';

// Infra Imports
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";

// Component Imports

function App() {

  return (
    <Router>
      <div data-component="DivInRouter" className="my-0">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
      </div>
    </Router >
  );





  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
