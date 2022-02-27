import './App.css';

// Infra Imports
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Test1 from './components/_TestComponents/Test1';

// Component Imports
import Wrapper from './components/Wrapper';

function App() {

  return (
    <Router>
      <div data-component="DivInRouter" className="my-0">
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Wrapper>
      </div>
    </Router >

  );


}

export default App;
