import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProductos,
  getProducto,
  updateProducto,
} from "../controllers/productos.controller.js";
const router = Router();


router.get("/productos", getProductos);

router.get("/productos/:id", getProducto);

router.delete("/productos/:id", deleteProducto);

router.post("/productos", createProducto);

router.patch("/productos/:id", updateProducto);

export default router;
