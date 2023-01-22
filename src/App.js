import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPage from "./components/SongPage";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/SongPage" element={<SongPage />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/SpotifyStatsGame" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
