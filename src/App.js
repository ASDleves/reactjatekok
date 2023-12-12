
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Jatekok from './pages/Jatekok';
import TictactoeApp from './pages/TictacToeApp';
import LightOnApp from './pages/LightOutApp';
import NoPage from './pages/noPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="/tictactoe" element={<TictactoeApp />} />
          <Route path="/lighton" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
