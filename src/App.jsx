import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Register></Register>
    </AuthProvider>
  );
}

export default App;
