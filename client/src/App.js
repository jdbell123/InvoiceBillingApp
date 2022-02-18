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


}

export default App;
