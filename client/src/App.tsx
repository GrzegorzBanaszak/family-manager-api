import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";
import { getUser } from "./features/auth/authSlice";
import { useEffect } from "react";
import DashboardUser from "./components/Dashboards/DashboardUser";
import DashboardAdmin from "./components/Dashboards/DashboardAdmin";
import RegisterAdmin from "./pages/RegisterAdmin";

function App() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(getUser());
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              user ? (
                user.role === "user" ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="login"
            element={
              user ? (
                user.role === "user" ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="register"
            element={
              user ? (
                user.role === "user" ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="register/admin"
            element={
              user ? (
                user.role === "user" ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              ) : (
                <RegisterAdmin />
              )
            }
          />
          <Route
            path="dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          >
            <Route
              index
              element={
                user?.role === "user" ? (
                  <DashboardUser />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                user?.role === "admin" ? (
                  <DashboardAdmin />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
