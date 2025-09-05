// import logo from './logo.svg';
// import './App.css';
// import FormComponent from './FormComponent';
// function App() {
//   return (
// <>
// <FormComponent />
// </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import FormComponent from "./FormComponent";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={user ? "/service-report-form" : "/login"} replace />}
        />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/service-report-form" replace />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/service-report-form"
          element={
            user ? (
              <FormComponent onLogout={handleLogout} user={user}/>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

