import express from "express";
import productosRoutes from "./routes/productos.route.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", productosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "No existe esta ruta" });
});

export default app;
