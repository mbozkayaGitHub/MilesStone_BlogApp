import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import {NavBar}  from "../components/NavBar"
import About from "../pages/About";


const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* Footer */}
    </Router>
  );
};

export default AppRouter;
