import cors from "cors";
import express from "express";
import { setupSwagger } from "./config/swagger.js";
import movieRoutes from "./routes/movie.routes.js";
import platformRoutes from "./routes/platform.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use("/platforms", platformRoutes);

app.use("/movies", movieRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
