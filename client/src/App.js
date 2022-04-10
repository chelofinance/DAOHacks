import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  IndexRoute
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Landing from './pages/Landing';

import { ROUTES } from './Router';

import './App.scss'

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
          {ROUTES.map((k, i) => (
            <Route exact={k.exact} key={i} path={k.path} element={<k.component />} />
          ))}
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
      </Routes>
    </Router>
  );
};

export default App;
