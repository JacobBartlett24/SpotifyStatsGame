import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPage from "./components/SongPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SongPage" element={<SongPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
