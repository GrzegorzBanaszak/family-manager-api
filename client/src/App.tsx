import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import Dashbord from "./pages/Dashbord";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={user ? <Navigate to="/dashbord" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/dashbord" /> : <Register />}
          />
          <Route
            path="dashbord"
            element={user ? <Dashbord /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
