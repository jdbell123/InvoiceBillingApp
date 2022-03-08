import './App.css';

// Infra Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Overview from './pages/Overview';

// Component Imports
import SideBar from './components/SideBar';

function App() {

  return (
    <Router>
    <SideBar />
    <Routes>
      <Route path='/overview' exact element={<Overview />} />
      <Route path='/reports' exact element={<Home />} />
      <Route path='/reports/billing' exact element={<Home />} />
      <Route path='/reports/employer' exact element={<Home />} />
      <Route path='/reports/employerbalance' exact element={<Home />} />
      <Route path='/agent' exact element={<Agent />} />
      <Route path='/agent/add' exact element={<Agent />} />
      <Route path='/agent/modify' exact element={<Agent />} />
      <Route path='/agent/delete' exact element={<Agent />} />
      <Route path='*' element={<Home />} />
    </Routes>
  </Router>
  );

}

export default App;
