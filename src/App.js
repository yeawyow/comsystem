import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Navbar from "./Components/Layout/Navbar";
import { Sidebar } from "./Components/Layout/Sidebar";
import { Footer } from "./Components/Layout/Footer";
import ComEquip from "./Components/Pages/ComEquip";
import { JobMange } from "./Components/Pages/JobMange";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/comequip" component={ComEquip} />
        <Route exact path="/job" component={JobMange} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
