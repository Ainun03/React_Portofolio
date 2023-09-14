import React, { lazy } from "react";

import { BrowserRouter ,Router,Route, Routes } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
      <ThemeProvider>
        <CssBaseline />
        {/* <Router> */}
          <BrowserRouter>
          <HelmetMeta />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<PageNotFound/>} />
          </Routes>
          </BrowserRouter>
        {/* </Router> */}
      </ThemeProvider>
    );
};