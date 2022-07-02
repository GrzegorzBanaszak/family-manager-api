import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import Dashbord from "./pages/Dashbord";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";
import { getUser } from "./features/auth/authSlice";
import { useEffect } from "react";

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
            element={user ? <Navigate to="/dashboard" /> : <Home />}
          />
          <Route
            path="login"
            element={user ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route
            path="dashboard"
            element={user ? <Dashbord /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
