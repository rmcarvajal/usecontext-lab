import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Catalogue } from "./pages/Catalogue";
import { Saved } from "./pages/Saved";
import { Home } from "./pages/Home";
import { UserProvider } from "./context/UserContext";


//you can stack providers and then put the pages in the last one
function App() {
  return (
    <>        
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/saved" element={<Saved/>} />      
      </Routes>
    </UserProvider>                
    </>
  );
}

export default App;
