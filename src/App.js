import React from "react";
import { TopBar, Home, About, Contact } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Container maxWidth={false} sx={{ display: "flex", minHeight: "100vh" }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
