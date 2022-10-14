import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import User from "./components/user/User";

function App() {
  const [login_auth, setLogin_auth] = useState(false);
  useEffect(() => {
    localStorage.setItem(
      "login_credential",
      JSON.stringify({
        username: "admin@gmail.com",
        password: "admin",
      })
    );
    // localStorage.setItem("password", "admin");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/"}
          element={
            login_auth ? <Dashboard /> : <Login setLogin_auth={setLogin_auth} />
          }
        />
        {login_auth ? (
          <Route
            path="/dashboard"
            element={<Dashboard setLogin_auth={setLogin_auth} />}
          />
        ) : (
          ""
        )}

        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
