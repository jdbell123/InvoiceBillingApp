import './App.css';

// Infra Imports
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Agent from "./pages/Agent";

// Component Imports
import Wrapper from './components/Wrapper';

function App() {

  return (
    <Router>
      <div data-component="DivInRouter" className="my-0">
          <Routes>
            <Route element={<Wrapper />}>
              <Route path="*" element={<Home />}></Route>
              <Route exact path="/agent" element={<Agent />}></Route>
            </Route>
          </Routes>
      </div>
    </Router >

  );


}

export default App;
