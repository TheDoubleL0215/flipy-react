import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./services/PrivateRoute";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewDeck from "./pages/NewDeck";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Dashboard />} />
          </Route>
          <Route exact path='/newdeck' element={<PrivateRoute />}>
            <Route exact path='/newdeck' element={<NewDeck />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
