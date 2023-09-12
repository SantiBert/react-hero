import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {LoginScreen} from '../components/login/LoginScreen';
import {DashRouter} from '../routers/DashRouter';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/login" element={ <LoginScreen/> } />
                <Route path="*" element={ <DashRouter />} />
            </Routes>
        </div>
    </Router>
  )
}
