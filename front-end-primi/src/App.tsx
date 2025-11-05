import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { MovieDetail } from "./pages/MovieDetail.tsx";
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
