import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TV from "./pages/TV";
import Movies from "./pages/Movies";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtuctedRoute from "./components/ProtuctedRoute";
import Account from "./pages/Account";

function App() {
  return (
<BrowserRouter>
  <AuthContextProvider>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="TV" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/account" element={<ProtuctedRoute> <Account/> </ProtuctedRoute>} />
      </Routes>
    </div>
  </AuthContextProvider>
</BrowserRouter>
  );
}

export default App;
