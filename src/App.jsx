import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Insert from "./components/Insert";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<div className="text-white p-10">Welcome to Netflix Clone <Home /></div> } />
          <Route path="update" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
