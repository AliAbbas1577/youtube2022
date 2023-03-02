import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/header/Header.js";
import Home from "./Pages/Home/Home.js";
import List from "./Pages/List/List.js";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bus" element={<List />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
