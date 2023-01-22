import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPage from "./components/SongPage";
import Game from "./components/Game";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/SongPage" element={<SongPage />} />            
              <Route path="/Game" element={<ErrorBoundary FallbackComponent={Game}><Game /></ErrorBoundary>} />
            <Route path="/SpotifyStatsGame" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
