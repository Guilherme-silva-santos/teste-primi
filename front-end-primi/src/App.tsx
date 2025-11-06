import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { MovieDetail } from "./pages/MovieDetail.tsx";

import { MovieProvider } from "../src/data/Movies/index.tsx";
import { AddMovie } from "./pages/AddMovie.tsx";
import { ScreenTemplate } from "./presentation/atomic/templates/ScreenTemplate";

function App() {
  return (
    <ScreenTemplate>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/add-movie/:id" element={<AddMovie />} />
        </Routes>
      </MovieProvider>
    </ScreenTemplate>
  );
}

export default App;
