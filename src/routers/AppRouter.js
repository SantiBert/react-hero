import React, { useContext } from "react";

import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";

import {LoginScreen} from '../components/login/LoginScreen';
import {DashRouter} from '../routers/DashRouter';
import { AuthContex } from "../auth/AuthContext";

export const AppRouter = () => {

  const { user } = useContext(AuthContex);

  return (
    <Router>
        <div>
            <Routes>
                <Route exact path="/login" element={ <LoginScreen/> } />
                { user.logged ? (
                <Route path="*" element={ <DashRouter />} />
                ) : (
                  <Route path="*" element={<Navigate to="/login" replace />} />
                )}
            </Routes>
        </div>
    </Router>
  )
}
