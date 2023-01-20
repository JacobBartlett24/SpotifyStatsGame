import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPage from "./components/SongPage";
import Game from "./components/Game";
import Header from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/SongPage" element={<SongPage />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
