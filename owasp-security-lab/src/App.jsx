import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import XSS from "./pages/XSS";
import SQLInjection from "./pages/SQLInjection";
import BrokenAuth from "./pages/BrokenAuth";
import SecurityMisconfiguration from "./pages/SecurityMisconfiguration";
import OutdatedComponents from "./pages/OutdatedComponents";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/xss" element={<XSS />} />
        
        <Route
          path="/xss"
          element={<XSS />}
        />

        <Route
          path="/sql-injection"
          element={<SQLInjection />}
        />

        <Route
          path="/broken-auth"
          element={<BrokenAuth />}
        />

        <Route
          path="/security-misconfiguration"
          element={<SecurityMisconfiguration />}
        />

        <Route
          path="/outdated-components"
          element={<OutdatedComponents />}
        />
      </Routes>
    </>
  );
}

export default App;