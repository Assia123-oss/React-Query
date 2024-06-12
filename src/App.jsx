import { createContext,useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Custom from "./components/custom";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Assia");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/form" element={<Form />} />
          <Route path="/hooks" element={<Custom/>} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
