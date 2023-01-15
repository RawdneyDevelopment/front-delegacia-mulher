import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


import Login from "../pages/Login";

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    )
}
export default RoutesComponent; 
