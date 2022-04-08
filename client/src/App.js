import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { ROUTES } from './Router';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="lg">
        <Routes>
          {ROUTES.map((k, i) => (
            <Route exact={k.exact} key={i} path={k.path} element={<k.component />} />
          ))}
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
