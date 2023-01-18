import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPage from "./components/SongPage";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SongPage" element={<SongPage />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
